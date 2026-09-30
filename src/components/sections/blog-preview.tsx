import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

export function BlogPreviewSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/60" id="blog-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal-800 bg-teal-100 border border-teal-200">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Medical Knowledge & Wellness</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Evidence-Based Health Advice from Our Doctors
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Clear, practical medical insights written directly by board-certified physicians to help
              you and your family prevent illnesses and make informed healthcare choices.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 shrink-0"
          >
            <span>Explore All Health Articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300"
            >
              <div>
                {/* Article Cover Image */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-16/9 overflow-hidden bg-slate-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-teal-800 shadow-sm backdrop-blur-xs">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Article Content */}
                <div className="p-6">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTimeMinutes} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
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
                    <p className="text-[11px] text-teal-700 font-medium">{post.authorDepartment}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
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
  );
}
