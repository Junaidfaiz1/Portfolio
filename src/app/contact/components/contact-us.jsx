"use client";
import React, { useState } from "react";
import { MapPinHouse, Phone, Mail } from "lucide-react";

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (!response.ok) {
        setStatus("Could not send message. Please try again.");
      } else {
        setStatus("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("Could not send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-shell py-8 sm:py-12">
      <div className="panel grid overflow-hidden md:grid-cols-2">
        <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">
          <h2 className="mb-4 text-3xl font-bold text-slate-100">
            Get in Touch
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-300 sm:text-base">
            If you are hiring for a full stack role, need technical
            consultation, or want to collaborate on a product, feel free to
            reach out.
          </p>
          <div className="space-y-4 text-slate-200">
            <div className="flex items-center gap-3">
              <MapPinHouse size={18} className="text-cyan-300" />
              <span>Garden Town, Lahore</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-300" />
              <span>+923106846035</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-300" />
              <span>junaidfaizpk5@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h3 className="mb-4 text-2xl font-semibold text-slate-100">
            Contact Form
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-amber-300"
              value={formdata.name}
              onChange={(e) =>
                setFormData({ ...formdata, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-amber-300"
              value={formdata.email}
              onChange={(e) =>
                setFormData({ ...formdata, email: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Your Message"
              className="min-h-[140px] w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-amber-300"
              value={formdata.message}
              onChange={(e) =>
                setFormData({ ...formdata, message: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className={`w-full rounded-xl bg-amber-400 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300 ${loading ? "opacity-70" : "opacity-100"}`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="text-sm text-slate-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
