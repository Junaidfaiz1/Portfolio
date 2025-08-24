"use client";
import React, { useState } from "react";
import { MapPinHouse } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const ContactUs = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message } = formdata;
    if (!name || !email || !message) {
      alert("Please fill all fields!");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (response.ok) {
        setLoading(false);
        alert("Email sent successfully!");
        ResetForm();
      } else {
        alert("Error sending email!");
      }
    } catch (err) {
      setLoading(false);
      console.error("Error sending email:", err);
      alert("Error sending email!");
    }
  };

  const ResetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="rounded-2xl mb-6 md:mb-4 shadow-2xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Contact Info */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Reach out to me by filling out the form to send an email, or use the
            contact details provided below!
          </p>
          <ul className="space-y-3">
            <li>
              <div className="flex flex-row gap-2 items-center">
                <MapPinHouse className="text-yellow-400" />
                <span>
                  <strong>Location:</strong> Garden Town, Lahore
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2 items-center">
                <Mail className="text-red-400" />
                <span>
                  <strong>Email:</strong> junaidfaizpk5@gmail.com
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2 items-center">
                <Phone className="text-green-400" />
                <span>
                  <strong>Phone:</strong> +923106846035
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="px-6 py-10">
          <form className="space-y-6" onSubmit={HandleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                value={formdata.name}
                onChange={(e) =>
                  setFormData({ ...formdata, name: e.target.value })
                }
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={formdata.email}
                onChange={(e) =>
                  setFormData({ ...formdata, email: e.target.value })
                }
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                value={formdata.message}
                onChange={(e) =>
                  setFormData({ ...formdata, message: e.target.value })
                }
                required
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-semibold transition duration-200 ${
                loading
                  ? "bg-blue-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Sending Mail..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
