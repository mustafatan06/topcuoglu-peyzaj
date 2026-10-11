export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      <span className="horizon mt-8" />
      {description && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}