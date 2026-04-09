import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { blogPosts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Flycomm — Wireless Intelligence Insights",
  description:
    "Industry analysis, product updates, and wireless intelligence thought leadership from the Flycomm team.",
};

export default function BlogPage() {
  return (
    <>
      <Section>
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-brand transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
        </div>

        <SectionHeader
          tag="Blog"
          title="Wireless Intelligence Insights"
          description="Industry analysis, product updates, and thought leadership from the Flycomm team."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={post.externalUrl || `/blog/${post.slug}`}
              target={post.externalUrl ? "_blank" : undefined}
              rel={post.externalUrl ? "noopener noreferrer" : undefined}
              className="group card p-0 overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-brand/90 text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                  <span>{post.author}</span>
                  <span className="opacity-40">&middot;</span>
                  <time>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-2 leading-snug group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-brand font-medium mt-4 group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
