import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";

const Row = ({ icon: Icon, label, value, href }) => {
  const body = (
    <>
      <span className="icon-box">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-[13px] text-zinc-500">{label}</span>
        <span className="block font-semibold">{value}</span>
      </span>
    </>
  );
  const cls = "card flex items-center gap-3.5 p-5";
  return href ? (
    <a href={href} className={`${cls} transition-colors hover:border-stone-300`}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
};

const ContactInfo = () => (
  <div className="flex flex-[1_1_320px] flex-col gap-3">
    <Row icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
    <Row icon={Phone} label="Phone" value={contact.phone} href={contact.phoneHref} />
    <Row icon={MapPin} label="Location" value={contact.location} />
    <div className="flex gap-3">
      {[
        ["LinkedIn", contact.linkedin],
        ["GitHub", contact.github],
      ].map(([name, href]) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex h-14 flex-1 items-center justify-center gap-1.5 font-semibold transition-colors hover:border-stone-300"
        >
          {name} <ExternalLink size={14} aria-hidden="true" />
        </a>
      ))}
    </div>
  </div>
);

export default ContactInfo;
