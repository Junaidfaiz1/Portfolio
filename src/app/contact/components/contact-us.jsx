"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      if (!response.ok) {
        setStatus("Could not send message. Please try again.");
      } else {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("Could not send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", text: "Garden Town, Lahore" },
    { icon: Phone, label: "Phone", text: "+92 310 6846035" },
    { icon: Mail, label: "Email", text: "junaidfaizpk5@gmail.com" },
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/junaid-faiz/",
    },
    {
      name: "GitHub",
      href: "https://github.com/Junaidfaiz1",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-violet-100/50 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-100/40 blur-[80px]" />
      </div>

      <div className="section-shell relative">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <span className="section-label">Contact</span>
          </div>
          <h2 className="section-title">
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className="section-desc mx-auto mt-4">
            Looking for a full stack or AI engineering role, or want to
            collaborate on a product? Let&apos;s connect.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Info side */}
          <div className="space-y-5 lg:col-span-2">
            <div className="glass-card p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
                Contact Info
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                        <Icon size={16} className="text-violet-600" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-slate-700">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
                Socials
              </h3>
              <div className="space-y-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                  >
                    {social.name}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="glass-card p-6 sm:p-8 lg:col-span-3">
            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Send a message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-300 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-50"
                    value={formdata.name}
                    onChange={(e) =>
                      setFormData({ ...formdata, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-300 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-50"
                    value={formdata.email}
                    onChange={(e) =>
                      setFormData({ ...formdata, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  className="min-h-[160px] w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-300 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-50"
                  value={formdata.message}
                  onChange={(e) =>
                    setFormData({ ...formdata, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className={`btn-primary w-full ${loading ? "opacity-70" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>
              {status && (
                <p
                  className={`text-center text-sm font-medium ${
                    status.includes("successfully")
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
