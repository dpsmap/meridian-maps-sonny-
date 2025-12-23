import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'The History of Cartography in Myanmar',
    excerpt: 'Explore the rich history of map-making in Myanmar, from ancient trade route maps to modern digital cartography.',
    date: '2024-03-15',
    author: 'Dr. Aung Ko',
    category: 'History',
    image: '/placeholder.svg',
    slug: 'history-cartography-myanmar',
  },
  {
    id: 2,
    title: 'How to Choose the Right Map for Your Needs',
    excerpt: 'A comprehensive guide to selecting the perfect map format - vinyl, paper, canvas, or digital - based on your specific use case.',
    date: '2024-03-10',
    author: 'May Thiri',
    category: 'Guides',
    image: '/placeholder.svg',
    slug: 'choose-right-map-guide',
  },
  {
    id: 3,
    title: "Understanding Yangon's Township System",
    excerpt: 'Learn about the administrative divisions of Yangon and how our Township Map Book helps you navigate the city.',
    date: '2024-03-05',
    author: 'U Kyaw Win',
    category: 'Education',
    image: '/placeholder.svg',
    slug: 'yangon-township-system',
  },
  {
    id: 4,
    title: 'Custom Map Printing: What You Need to Know',
    excerpt: 'From file formats to paper types, everything you need to know about ordering custom map prints.',
    date: '2024-02-28',
    author: 'May Thiri',
    category: 'Guides',
    image: '/placeholder.svg',
    slug: 'custom-map-printing-guide',
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - DPS Map Shop | Cartography Insights & Map Guides</title>
        <meta 
          name="description" 
          content="Discover cartography insights, map guides, and Myanmar geography articles from DPS Map Shop experts." 
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-terracotta">
              Our Blog
            </span>
            <h1 className="font-display text-3xl font-bold md:text-4xl">Cartography Insights</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Explore articles about maps, cartography, and Myanmar's geography. 
              Learn from our experts and discover the stories behind our custom map prints.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>

                  <h2 className="mt-4 font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
