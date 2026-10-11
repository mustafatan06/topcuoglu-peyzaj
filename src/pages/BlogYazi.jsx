import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import CtaBand from "@/components/CtaBand";
import { posts } from "@/data/posts";
import usePageTitle from "@/hooks/usePageTitle";

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-14 font-heading text-2xl tracking-tight text-foreground sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-9 font-heading text-xl tracking-tight text-foreground">{block.text}</h3>
      );
    case "ul":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4">
              <span className="mt-2.5 h-px w-5 shrink-0 bg-primary" />
              <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "img":
      return (
        <figure className="mt-10">
          <div className="aspect-[16/9] overflow-hidden border border-border">
            <Image src={block.src} alt={block.caption || ""} className="h-full w-full object-cover" />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return <p className="mt-6 text-base leading-relaxed text-muted-foreground">{block.text}</p>;
  }
}

export default function BlogYazi() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  usePageTitle(post ? post.title : "Yazı bulunamadı");

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10">
        <h1 className="font-heading text-3xl tracking-tight">Bu yazıyı bulamadık</h1>
        <Link
          to="/blog"
          className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.2em] text-primary"
        >
          Tüm yazılara dön
        </Link>
      </section>
    );
  }

  const others = posts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Blog
        </Link>

        <p className="mt-10 text-[11px] uppercase tracking-[0.24em] text-primary">
          {post.dateLabel} · {post.readingTime}
        </p>
        <h1 className="mt-6 font-heading text-3xl leading-[1.12] tracking-tight sm:text-[2.75rem]">
          {post.title}
        </h1>

        <div className="mt-10 aspect-[16/9] overflow-hidden border border-border">
          <Image src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </div>

        <div className="mt-4">
          {post.content.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </div>
      </article>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="eyebrow">Diğer Yazılar</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="group flex items-center justify-between gap-6 border-t border-border pt-6"
              >
                <span>
                  <span className="block font-heading text-lg tracking-tight transition-colors group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.readingTime}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}