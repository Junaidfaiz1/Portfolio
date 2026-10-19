"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";

const topics = [
  "AI feature",
  "Web app",
  "API / backend",
  "UI / frontend",
  "Full-time role",
];

const empty = { name: "", email: "", message: "" };

const ContactForm = ({ showTopics = false, title }) => {
  const [form, setForm] = useState(empty);
  const [topic, setTopic] = useState(topics[0]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          topic: showTopics ? topic : "",
          message: showTopics
            ? `[${topic}]\n\n${form.message}`
            : form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus({ ok: true, text: "Message sent successfully!" });
      setForm(empty);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ ok: false, text: "Could not send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card flex flex-[1.4_1_480px] flex-col gap-5 p-6 sm:p-8"
    >
      {title && (
        <h2 className="text-[28px] font-extrabold tracking-[-0.03em]">
          {title}
        </h2>
      )}
      <div className="flex flex-wrap gap-3.5">
        <label className="flex flex-[1_1_200px] flex-col gap-2 text-sm font-semibold">
          Name
          <input
            className="field h-[52px]"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            required
          />
        </label>
        <label className="flex flex-[1_1_200px] flex-col gap-2 text-sm font-semibold">
          Email
          <input
            className="field h-[52px]"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
            required
          />
        </label>
      </div>

      {showTopics && (
        <fieldset>
          <legend className="mb-2.5 text-sm font-semibold">
            What do you need?
          </legend>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                aria-pressed={topic === t}
                className={`h-11 rounded-full border px-[18px] text-[15px] font-semibold transition-colors ${
                  topic === t
                    ? "border-ink bg-ink text-white"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <label className="flex flex-col gap-2 text-sm font-semibold">
        Message
        <textarea
          className="field min-h-[150px] resize-y py-3.5"
          name="message"
          placeholder="Tell me about your project, timeline and goals…"
          value={form.message}
          onChange={update("message")}
          required
        />
      </label>

      <button
        type="submit"
        className="btn-dark h-14 text-base disabled:opacity-70"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? "Sending…" : (
          <>
            Send message <ArrowRight size={16} aria-hidden="true" />
          </>
        )}
      </button>
      {status && (
        <p
          role="status"
          className={`text-center text-sm font-medium ${
            status.ok ? "text-green-700" : "text-red-600"
          }`}
        >
          {status.text}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
