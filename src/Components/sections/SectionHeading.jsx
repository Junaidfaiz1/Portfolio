const SectionHeading = ({ label, title, aside, as: Tag = "h2", id }) => (
  <div className="flex flex-wrap items-end justify-between gap-4">
    <div>
      <p className="lbl">{label}</p>
      <Tag id={id} className="h2">
        {title}
      </Tag>
    </div>
    {aside}
  </div>
);

export default SectionHeading;
