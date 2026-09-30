import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, User } from "lucide-react";
import { blogService, doctorService } from "@/services";
import { siteConfig } from "@/config/site.config";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { BlogPostingJsonLd } from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await blogService.getAll();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await blogService.getBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | HopeCare Health Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.authorName],
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await blogService.getBySlug(slug);

  if (!post) {
    notFound();
  }

  const doctor = await doctorService.getById(post.authorId);
  const relatedPosts = (await blogService.getAll())
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="flex flex-col">
      <Breadcrumbs
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header Metadata */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
                {post.category}
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-500">{formatDate(post.publishedAt)}</span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTimeMinutes} min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Byline Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-slate-200">
                  <Image
                    src={post.authorImage}
                    alt={post.authorName}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{post.authorName}</p>
                  <p className="text-xs text-teal-700 font-semibold">{post.authorTitle}</p>
                </div>
              </div>

              {doctor && (
                <Link href={`/doctors/${doctor.slug}`}>
                  <Button variant="outline" size="sm" className="hidden sm:inline-flex text-xs">
                    View Doctor Bio
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-16/9 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/80">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 pt-4 text-base">
            {post.content.split("\n\n").map((para, idx) => {
              if (para.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
                    {para.replace("### ", "")}
                  </h3>
                );
              }
              if (para.startsWith("- ") || para.startsWith("1. ")) {
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm whitespace-pre-line">
                    {para}
                  </div>
                );
              }
              return (
                <p key={idx} className="leading-relaxed whitespace-pre-line">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Author Callout Box */}
          {doctor && (
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden bg-slate-200 shrink-0">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{doctor.name}</h4>
                  <p className="text-xs text-teal-800 font-semibold">{doctor.title}</p>
                  <p className="text-xs text-slate-600 mt-1 italic">&quot;{doctor.ethos}&quot;</p>
                </div>
              </div>

              <Link
                href={`/appointment?doctor=${doctor.slug}&department=${doctor.departmentId}`}
                className="shrink-0 w-full sm:w-auto"
              >
                <Button size="md" className="w-full sm:w-auto gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book with {doctor.name.split(" ")[1]}</span>
                </Button>
              </Link>
            </div>
          )}

          {/* Related Articles */}
          <div className="pt-12 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Related Clinical Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-full">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-teal-700 mt-4 flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* JSON-LD Schema */}
      <BlogPostingJsonLd post={post} />
    </div>
  );
}
