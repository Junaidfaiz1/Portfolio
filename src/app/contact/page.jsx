import React from "react";
import ContactUs from "./components/contact-us";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Junaid Faiz for full stack development, AI engineering, or technical consultation. Based in Lahore, Pakistan.",
  openGraph: {
    title: "Contact Junaid Faiz",
    description:
      "Reach out for full stack development, AI engineering roles, or technical collaboration.",
  },
};

const Contact = () => {
  return (
    <div>
      <ContactUs />
    </div>
  );
};

export default Contact;
