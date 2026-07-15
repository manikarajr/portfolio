import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "../../components/ui/Button";
import { sendContactMessage } from "../../services/contactService";
import type { ContactFormErrors, ContactFormStatus, ContactFormValues } from "../../types/portfolio";
import { cn } from "../../utils/cn";

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", subject: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.subject.trim().length < 3) {
    errors.subject = "Please enter a subject with at least 3 characters.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please enter a message with at least 10 characters.";
  }

  return errors;
}

const FIELD_CLASSES =
  "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-neutral-900 shadow-sm transition-colors placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-600";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const isSubmitting = status === "submitting";

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Bots fill every field, including this visually hidden one. Real users
    // never see or touch it, so treat a non-empty value as spam and stop
    // here without hitting the API.
    if (honeypot) {
      setStatus("success");
      setValues(INITIAL_VALUES);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await sendContactMessage(values, honeypot);
      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center dark:border-emerald-900 dark:bg-emerald-950/40"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Message sent</h3>
        <p className="max-w-sm text-sm text-neutral-600 dark:text-slate-400">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="botcheck"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-slate-300">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(FIELD_CLASSES, errors.name ? "border-red-400 dark:border-red-700" : "border-neutral-300 dark:border-slate-700")}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-slate-300">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(FIELD_CLASSES, errors.email ? "border-red-400 dark:border-red-700" : "border-neutral-300 dark:border-slate-700")}
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-slate-300">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className={cn(FIELD_CLASSES, errors.subject ? "border-red-400 dark:border-red-700" : "border-neutral-300 dark:border-slate-700")}
        />
        {errors.subject && (
          <p id="contact-subject-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(FIELD_CLASSES, "resize-none", errors.message ? "border-red-400 dark:border-red-700" : "border-neutral-300 dark:border-slate-700")}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        icon={isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
