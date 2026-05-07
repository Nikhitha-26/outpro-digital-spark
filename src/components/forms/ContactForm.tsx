import { useState } from "react";
import { Card } from "@/components/common/Card";
import { CTAButton } from "@/components/common/Button";

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const services = [
  "Brand Identity Design",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Performance Marketing",
  "Content Creation",
  "Website Design & Optimization",
  "Not sure yet",
];

const budgets = ["< ₹1L / mo", "₹1L – ₹3L / mo", "₹3L – ₹7L / mo", "₹7L+ / mo"];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Tell us a bit more (min 10 characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Placeholder: integrate with CRM (HubSpot, Salesforce) or backend endpoint.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="p-10 text-center">
        <h3 className="text-2xl font-semibold">Thanks — we got it.</h3>
        <p className="mt-2 text-muted-foreground">
          A strategist will get back to you within 48 hours.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-10">
      <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2" noValidate>
        <Field
          label="Full name"
          error={errors.name}
          input={
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputCls}
              required
            />
          }
        />
        <Field
          label="Email"
          error={errors.email}
          input={
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputCls}
              required
            />
          }
        />
        <Field
          label="Company"
          input={
            <input
              type="text"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className={inputCls}
            />
          }
        />
        <Field
          label="Service interested in"
          input={
            <select
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
              className={inputCls}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          }
        />
        <Field
          label="Budget range"
          className="sm:col-span-2"
          input={
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={inputCls}
            >
              <option value="">Select a budget</option>
              {budgets.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          }
        />
        <Field
          label="Tell us about your project"
          className="sm:col-span-2"
          error={errors.message}
          input={
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={inputCls + " resize-none"}
              required
            />
          }
        />
        <div className="sm:col-span-2">
          <CTAButton type="submit" size="lg" withArrow className="w-full sm:w-auto">
            Send message
          </CTAButton>
        </div>
      </form>
    </Card>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

function Field({
  label,
  input,
  error,
  className = "",
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <label className={"block " + className}>
      <span className="text-sm font-medium text-foreground/90">{label}</span>
      <div className="mt-2">{input}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
