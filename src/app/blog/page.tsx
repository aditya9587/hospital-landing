import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight, User } from "lucide-react";
import { blogService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Health & Medical Insights Blog | HopeCare Hospital",
  description:
    "Evidence-based medical articles, preventive wellness guides, and health tips authored directly by board-certified physicians at HopeCare Hospital.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default async function BlogIndexPage() {
  const posts = await blogService.getAll();

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={[{ name: "Medical Blog", url: "/blog" }]} />

      <section className="bg-gradient-to-b from-teal-50/70 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full">
            Physician Written Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Medical Insights & Preventive Health
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Practical health intelligence written directly by our medical directors and specialist
            physicians to empower you and your family toward healthier, longer lives.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300"
              >
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block relative aspect-16/10 overflow-hidden bg-slate-100"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold text-teal-900 bg-white/95 px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTimeMinutes} min read
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden bg-slate-200">
                      <Image
                        src={post.authorImage}
                        alt={post.authorName}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{post.authorName}</p>
                      <p className="text-[11px] text-teal-700 font-medium">
                        {post.authorDepartment}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
