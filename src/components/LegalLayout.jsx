import SectionHeading from "@/components/SectionHeading";

export default function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <p className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
        Son güncelleme: {updated}
      </p>
      <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground [&_h2]:pt-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-foreground">
        {children}
      </div>
    </article>
  );
}