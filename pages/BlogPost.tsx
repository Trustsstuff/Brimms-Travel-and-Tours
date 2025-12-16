import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h2>
        <Link to="/blog" className="text-brand-blue hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-bg min-h-screen pb-20">
      {/* Header Image */}
      <div className="relative h-96 w-full">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 max-w-4xl mx-auto">
             <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors">
                <ArrowLeft size={16} /> Back to Blog
             </Link>
             <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
             <div className="flex flex-wrap gap-6 text-white/90 text-sm">
                 <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                 <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                 <span className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm"><Tag size={14} /> {post.category}</span>
             </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
        <div className="bg-white dark:bg-dark-card p-8 md:p-12 rounded-2xl shadow-xl">
             <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
                 <div dangerouslySetInnerHTML={{ __html: post.content }} />
             </div>
             
             <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700">
                 <h4 className="font-bold text-gray-900 dark:text-white mb-4">Share this article</h4>
                 <div className="flex gap-4">
                     <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                         <Share2 size={20} />
                     </button>
                     {/* Placeholder share buttons */}
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;