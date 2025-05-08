import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { myprojects } from '../projects.js';

const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? myprojects
      : myprojects.filter((project) => project.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Browse our recent projects and see how we've helped businesses
              achieve success online.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "e-commerce" ? "default" : "outline"}
              onClick={() => setFilter("e-commerce")}
            >
              E-Commerce
            </Button>
            <Button
              variant={filter === "business" ? "default" : "outline"}
              onClick={() => setFilter("business")}
            >
              Business
            </Button>
            <Button
              variant={filter === "app" ? "default" : "outline"}
              onClick={() => setFilter("app")}
            >
              Web Apps
            </Button>
            <Button
              variant={filter === "blog" ? "default" : "outline"}
              onClick={() => setFilter("blog")}
            >
              Blogs
            </Button>
            <Button
              variant={filter === "webdesign" ? "default" : "outline"}
              onClick={() => setFilter("webdesign")}
            >
              Web Design
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="text-white border-white">
                        View Case Study
                      </Button>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us for a free
            consultation.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="text-accent">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-gray-600">
              Dive deeper into our process and see the results we've achieved
              for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8fHwxNzE2MzQ1NTU0fDA&ixlib=rb-4.0.3&q=80&w=800"
                    alt="LuxHome E-Commerce"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                    E-Commerce
                  </div>
                  <h3 className="text-xl font-bold mt-2 mb-2">
                    LuxHome: 150% Increase in Online Sales
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how we redesigned LuxHome's website and implemented a
                    strategic e-commerce solution that resulted in a 150%
                    increase in online sales within 6 months.
                  </p>
                  <Link to="/portfolio/1">
                    <Button variant="outline">Read Case Study</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8fHwxNzE2MzQ1NTU0fDA&ixlib=rb-4.0.3&q=80&w=800"
                    alt="FinTrack App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                    Web App
                  </div>
                  <h3 className="text-xl font-bold mt-2 mb-2">
                    FinTrack: Revolutionizing Financial Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover how we created a custom financial dashboard that
                    helped FinTrack's users better manage their finances and led
                    to a 200% increase in user engagement.
                  </p>
                  <Link to="/portfolio/3">
                    <Button variant="outline">Read Case Study</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
