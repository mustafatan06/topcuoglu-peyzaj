import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/SectionHeading";
import PostCard from "@/components/PostCard";
import CtaBand from "@/components/CtaBand";
import { posts } from "@/data/posts";
import usePageTitle from "@/hooks/usePageTitle";

export default function Blog() {
  usePageTitle("Blog");
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Blog"
          title="Bahçeniz için pratik rehberler"
          description="Kendi bahçenizde uygulayabileceğiniz bakım, tasarım ve zararlı yönetimi ipuçlarımızı derledik."
        />

        <Link
          to={`/blog/${featured.slug}`}
          className="group mt-16 grid gap-10 border border-border p-6 lg:grid-cols-2 lg:p-8"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-card">
            <Image
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary">Öne Çıkan Yazı</p>
            <h2 className="mt-5 font-heading text-2xl leading-snug tracking-tight transition-colors group-hover:text-primary lg:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              {featured.dateLabel} · {featured.readingTime}
            </p>
          </div>
        </Link>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <CtaBand title="Bahçeniz için profesyonel destek ister misiniz?" />
    </>
  );
}