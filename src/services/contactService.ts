import type { ContactFormValues } from "../types/portfolio";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

/**
 * Submission adapter for the contact form. Sends directly to Web3Forms
 * (https://web3forms.com), which relays the message to the inbox tied to
 * the access key — no backend required. Get a free access key at
 * https://web3forms.com/ and set it as VITE_WEB3FORMS_ACCESS_KEY (see
 * .env.example).
 */
export async function sendContactMessage(values: ContactFormValues, honeypot: string): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

  if (!accessKey) {
    throw new Error("The contact form isn't connected yet. Set VITE_WEB3FORMS_ACCESS_KEY to enable submissions.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Portfolio contact: ${values.subject}`,
      from_name: values.name,
      name: values.name,
      email: values.email,
      message: values.message,
      botcheck: honeypot,
    }),
  });

  const data = (await response.json()) as Web3FormsResponse;

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Something went wrong while sending your message. Please try again.");
  }
}
