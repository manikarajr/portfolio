import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";
import { sendContactMessage } from "../../services/contactService";

vi.mock("../../services/contactService", () => ({
  sendContactMessage: vi.fn(),
}));

const mockSendContactMessage = vi.mocked(sendContactMessage);

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Name"), "Jane Doe");
  await user.type(screen.getByLabelText("Email"), "jane@example.com");
  await user.type(screen.getByLabelText("Subject"), "Hello there");
  await user.type(screen.getByLabelText("Message"), "This message is long enough to pass validation.");
}

function setHiddenInputValue(element: HTMLInputElement, value: string) {
  const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")!.set!;
  nativeSetter.call(element, value);
  element.dispatchEvent(new Event("input", { bubbles: true }));
}

describe("ContactForm", () => {
  beforeEach(() => {
    mockSendContactMessage.mockReset();
  });

  it("shows validation errors and does not submit when fields are empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText("Please enter your full name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a subject with at least 3 characters.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a message with at least 10 characters.")).toBeInTheDocument();
    expect(mockSendContactMessage).not.toHaveBeenCalled();
  });

  it("submits successfully with valid data and shows the success state", async () => {
    mockSendContactMessage.mockResolvedValueOnce(undefined);
    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(screen.getByText("Message sent")).toBeInTheDocument());
    expect(mockSendContactMessage).toHaveBeenCalledTimes(1);
    expect(mockSendContactMessage).toHaveBeenCalledWith(
      { name: "Jane Doe", email: "jane@example.com", subject: "Hello there", message: "This message is long enough to pass validation." },
      "",
    );
  });

  it("silently drops the submission when the honeypot field is filled, without calling the API", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);

    const honeypot = document.querySelector('input[name="botcheck"]') as HTMLInputElement;
    setHiddenInputValue(honeypot, "I am a bot");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(screen.getByText("Message sent")).toBeInTheDocument());
    expect(mockSendContactMessage).not.toHaveBeenCalled();
  });

  it("shows an error message when the API call fails", async () => {
    mockSendContactMessage.mockRejectedValueOnce(new Error("Network down"));
    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText("Network down")).toBeInTheDocument();
  });
});
