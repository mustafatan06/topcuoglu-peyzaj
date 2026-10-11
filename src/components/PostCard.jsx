import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

export default function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-card">
        <Image
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        {post.dateLabel} · {post.readingTime}
      </p>
      <h3 className="mt-3 font-heading text-xl leading-snug tracking-tight transition-colors group-hover:text-primary">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
    </Link>
  );
}