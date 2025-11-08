import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const { t } = useLanguage();

  const posts = [
    {
      title: t.blog.posts.post1.title,
      excerpt: t.blog.posts.post1.excerpt,
      date: 'January 15, 2025',
      author: 'Eplus Digital Team',
      category: 'Mobile Development',
      image: null,
    },
    {
      title: t.blog.posts.post2.title,
      excerpt: t.blog.posts.post2.excerpt,
      date: 'January 10, 2025',
      author: 'Eplus Digital Team',
      category: 'Technology',
      image: null,
    },
    {
      title: t.blog.posts.post3.title,
      excerpt: t.blog.posts.post3.excerpt,
      date: 'January 5, 2025',
      author: 'Eplus Digital Team',
      category: 'Design',
      image: null,
    },
    {
      title: 'Building Scalable Backend Systems',
      excerpt: 'Learn best practices for designing and implementing scalable backend architectures.',
      date: 'December 28, 2024',
      author: 'Eplus Digital Team',
      category: 'Backend',
      image: null,
    },
    {
      title: 'The Future of Cross-Platform Development',
      excerpt: 'Exploring the latest trends and technologies in cross-platform mobile development.',
      date: 'December 20, 2024',
      author: 'Eplus Digital Team',
      category: 'Mobile Development',
      image: null,
    },
    {
      title: 'User Experience Design Principles',
      excerpt: 'Key principles for creating intuitive and engaging user experiences.',
      date: 'December 15, 2024',
      author: 'Eplus Digital Team',
      category: 'Design',
      image: null,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.blog.title}
            </h1>
            <p className="text-xl text-gray-600">
              Insights, trends, and best practices in mobile app development and digital product design
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-30">
                    {post.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUser size={14} />
                      {post.author}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    {t.blog.readMore}
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to get the latest insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
