
import React, { useState } from "react";
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 Web Design Trends to Watch in 2025",
      excerpt:
        "Discover the latest design trends that are shaping the web and learn how to implement them in your projects.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8fHwxNzE2MzQ1NTU0fDA&ixlib=rb-4.0.3&q=80&w=800",
      author: "Alex Morgan",
      date: "May 1, 2025",
      category: "Design",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Better Performance",
      excerpt:
        "Learn the techniques and best practices for improving your website's speed and performance.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MjE5Mg&ixlib=rb-4.0.3&q=80&w=1080",
      author: "Sarah Johnson",
      date: "April 15, 2025",
      category: "Development",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "The Ultimate Guide to SEO for Small Businesses",
      excerpt:
        "Everything you need to know about SEO to improve your website's visibility and drive more organic traffic.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzUyNA&ixlib=rb-4.0.3&q=80&w=1080",
      author: "Michael Chen",
      date: "April 8, 2025",
      category: "SEO",
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "E-commerce: Setting Up Your First Online Store",
      excerpt:
        "A step-by-step guide to creating and launching a successful e-commerce website that converts visitors into customers.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8fHwxNzE2MzQ1NTU0fDA&ixlib=rb-4.0.3&q=80&w=800",
      author: "Emma Rodriguez",
      date: "March 22, 2025",
      category: "E-commerce",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "The Psychology of Color in Web Design",
      excerpt:
        "How different colors affect user behavior and how to use color psychology to achieve your website goals.",
      image: "https://images.unsplash.com/photo-1546387903-6d82d96ccca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzY2MA&ixlib=rb-4.0.3&q=80&w=1080",
      author: "Alex Morgan",
      date: "March 10, 2025",
      category: "Design",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Accessibility in Web Design: Why It Matters",
      excerpt:
        "Learn how to make your website accessible to all users, including those with disabilities, and why it's important for business.",
      image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4Mzc0MA&ixlib=rb-4.0.3&q=80&w=1080",
      author: "Sarah Johnson",
      date: "February 28, 2025",
      category: "Accessibility",
      readTime: "9 min read",
    },
  ];

  const categories = ["All", "Design", "Development", "SEO", "E-commerce", "Accessibility"];

  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-lg text-gray-300 mb-8">
              Stay up-to-date with the latest web design and development trends, tips, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div className="md:w-1/3">
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="hover:no-underline">
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold py-1 px-2 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-sm">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular and informative content to help you succeed online.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4Mzg4MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="The Complete Guide to Modern Web Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">Featured Article</div>
                <h3 className="text-2xl font-bold mb-4">
                  The Complete Guide to Modern Web Development in 2025
                </h3>
                <p className="text-gray-600 mb-6">
                  An in-depth exploration of modern web development practices, tools, and technologies that are shaping the industry today. Learn how to build faster, more secure, and more user-friendly websites.
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium">Alex Morgan</p>
                    <p className="text-sm text-gray-500">April 5, 2025 • 15 min read</p>
                  </div>
                </div>
                <Link to="/blog/featured">
                  <Button>Read Full Article</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8">
              Get the latest articles, resources, and tips straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-navy-800 border-navy-700 text-white"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
