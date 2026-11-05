import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Share2, 
  Check, 
  BookOpen, 
  Tag,
  ChevronRight
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { BLOG_POSTS, COMPANY_INFO } from '../data/companyData';
import { BlogPost } from '../types';

export const BlogPage: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Healthcare Technology', 'Cybersecurity', 'Cloud Computing', 'IT Infrastructure'];

  // Check URL hash to open article directly
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace('#', '');
      const match = BLOG_POSTS.find(p => p.slug === slug);
      if (match) setActiveArticle(match);
    }
  }, [location.hash]);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = BLOG_POSTS[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Technology Insights & Engineering Blog"
        subtitle="Practical guides, infrastructure blueprints, cybersecurity updates, and digital health analysis for Nepali businesses and institutions."
        badgeText="Knowledge & Technical Articles"
        breadcrumbs={[{ label: 'Blog & News' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Featured Article Banner */}
          {selectedCategory === 'All' && !searchTerm && (
            <div className="rounded-3xl bg-[#202329] text-white overflow-hidden border border-neutral-800 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2.5 py-1 rounded bg-[#F4510B] text-white font-bold uppercase tracking-wider text-[10px]">
                      Featured Article
                    </span>
                    <span className="text-neutral-400">{featuredPost.date}</span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-neutral-400">{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {featuredPost.summary}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => setActiveArticle(featuredPost)}
                      className="px-5 py-2.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2"
                    >
                      <span>Read Full Insight</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs text-neutral-400">By {featuredPost.author}</span>
                  </div>
                </div>

                <div className="lg:col-span-6 aspect-[16/10] bg-neutral-900 relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#202329] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          )}

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F5F7] rounded-xl border border-neutral-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#202329] text-white shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles by keyword or tag..."
                className="w-full pl-9 pr-4 py-2 text-xs border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#F4510B]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Article Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-2xs hover:shadow-sm hover:border-[#F4510B]/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/9] relative overflow-hidden bg-neutral-900">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#202329]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#F4510B] transition-colors leading-snug mb-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                        {post.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {post.tags.slice(0, 3).map((tag, tidx) => (
                          <span
                            key={tidx}
                            className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F4F5F7] text-neutral-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-neutral-100 flex items-center justify-between mt-4">
                    <button
                      onClick={() => setActiveArticle(post)}
                      className="text-xs font-semibold text-[#F4510B] hover:text-[#DC4607] flex items-center gap-1"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-neutral-400">
                      {post.author.split(' ')[0]}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#F4F5F7] rounded-3xl border border-neutral-200">
              <BookOpen className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-neutral-800">No articles matched your criteria</h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
                Try searching for broader keywords such as "firewall", "cloud", or "HMIS".
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold"
              >
                Clear Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-neutral-900 rounded-3xl max-w-3xl w-full p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F4510B] mb-2">
                <span>{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
                <span>·</span>
                <span className="text-neutral-500">{activeArticle.date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                {activeArticle.title}
              </h2>
              <div className="text-xs text-neutral-500 mt-2">
                Published by <span className="font-semibold text-neutral-800">{activeArticle.author}</span> · Bharatpur, Nepal
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-8 bg-neutral-900">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              {activeArticle.content.map((paragraph, pidx) => (
                <p key={pidx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeArticle.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-700">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="px-3.5 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs font-semibold flex items-center gap-1.5"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
