import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Check, 
  PhoneCall, 
  MessageSquare, 
  BookOpen, 
  ShieldCheck,
  Send,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { BLOG_POSTS, COMPANY_INFO } from '../data/companyData';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((b) => b.slug === slug || b.id === slug);

  const [copied, setCopied] = useState(false);
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((b) => b.id !== post.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryEmail) {
      setSubscribed(true);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title={post.title}
        subtitle={`${post.category} • ${post.readTime}`}
        badgeText="Technical Insights & Architecture"
        breadcrumbs={[
          { label: 'Blog & Articles', path: '/blog' },
          { label: post.title }
        ]}
      />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs text-neutral-500">
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-[#F4510B]/10 text-[#F4510B] font-bold">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-neutral-400" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span>{post.readTime}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-neutral-400" />
                <span>{post.author}</span>
              </span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-700 transition-colors font-medium"
              title="Copy article link"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="my-8 rounded-3xl overflow-hidden border border-neutral-200 shadow-md aspect-video max-h-[440px]">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                category="datacenter"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Executive Summary Callout */}
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-neutral-50 border-l-4 border-[#F4510B] text-neutral-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
              Key Takeaway
            </span>
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              {post.summary}
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-neutral max-w-none space-y-6 text-neutral-800 leading-relaxed text-base sm:text-lg">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-neutral-400 mr-2" />
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-neutral-100 text-xs font-medium text-neutral-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Engineering Team Author Card */}
          <div className="my-12 p-8 rounded-3xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#F4510B] flex items-center justify-center text-white shrink-0 font-extrabold text-xl">
              TP
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                About the Author
              </span>
              <h3 className="text-lg font-bold text-white">{post.author}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Techno Path is Chitwan’s premier IT infrastructure and systems integration engineering firm, providing enterprise networking, healthcare IT, and cloud engineering services across Nepal.
              </p>
              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-semibold">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-[#F4510B] hover:text-white transition-colors flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-neutral-200 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4510B]">
                  Continue Reading
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-1">
                  Related Architecture Guides
                </h3>
              </div>
              <Link
                to="/blog"
                className="text-xs font-bold text-[#F4510B] hover:underline flex items-center gap-1"
              >
                <span>All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#F4510B] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4510B]">
                      {related.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 mt-1.5 group-hover:text-[#F4510B] transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-2 line-clamp-2">
                      {related.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                    <span>{related.readTime}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4510B] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
