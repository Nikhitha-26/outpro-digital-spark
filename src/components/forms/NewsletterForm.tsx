import { useState } from "react";
import { Mail } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Placeholder: integrate with newsletter provider (Mailchimp, ConvertKit, etc.)
        if (/^\S+@\S+\.\S+$/.test(email)) setSubmitted(true);
      }}
      className="flex w-full items-center gap-2 rounded-full border border-border bg-surface/60 p-1 pl-4"
    >
      <Mail className="size-4 text-muted-foreground" aria-hidden />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={submitted ? "Subscribed ✓" : "Your email"}
        disabled={submitted}
        aria-label="Email address"
        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-gradient-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        {submitted ? "Done" : "Join"}
      </button>
    </form>
  );
}
