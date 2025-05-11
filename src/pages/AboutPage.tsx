
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { value: "50+", label: "Happy Clients" },
    { value: "100+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "12", label: "Team Members" },
  ];

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Alex has 15+ years of experience in web development and has led projects for numerous Fortune 500 companies.",
    },
    {
      name: "Sanket Vasoya",
      role: "UI/UX Designer",
      image: "/img/sanket.jpg",
      bio: "I’m Sanket, a Senior UI/UX Designer passionate about creating interfaces that users love and businesses trust.",
    },
    {
      name: "Jay Vekariya",
      role: "Senior Developer",
      image: "/img/jaypatel.jpg",
      bio: "Jay specializes in Full-Stack development with expertise in React, Vue, and modern JavaScript frameworks.",
    },
    {
      name: "Emma Rodriguez",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      bio: "Emma ensures projects are delivered on time and within budget while maintaining exceptional quality.",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We embrace innovation and stay at the forefront of technology to provide cutting-edge solutions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our relationships.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M2 12.5l5.5 5.5L22 5.5" />
        </svg>
      ),
    },
    {
      title: "Client-Centric",
      description: "We prioritize our clients' needs and work collaboratively to achieve their business goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  const process = [
    {
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements. This phase includes market research and creating a strategic project plan.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzA1OQ&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Design & Prototyping",
      description: "We create wireframes and design mockups that align with your brand and meet user expectations. You'll review and approve designs before we move to development.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzE2OA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient code. We build your website or application using modern technologies and best practices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzI3Mg&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Testing & Launch",
      description: "We thoroughly test your website across devices and browsers before launch. After deployment, we provide training and ongoing support to ensure your continued success.",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzM1OQ&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-300 mb-8">
              We're a team of passionate web professionals dedicated to helping businesses succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, WebStudio began with a simple mission: to help businesses thrive in the digital world. 
                Our founder, Alex Morgan, saw that many companies were struggling with outdated websites that didn't 
                reflect their brand or meet their business goals.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small freelance operation has grown into a full-service web design and development 
                agency, with a team of talented professionals dedicated to creating exceptional web experiences.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we work with businesses of all sizes across various industries, from startups to established 
                enterprises. Our approach combines creativity with technical expertise to deliver websites that not 
                only look great but also perform exceptionally well.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>Our Services</Button>
                <Button variant="outline">Meet the Team</Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MjgzNw&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Team working together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide our work and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented professionals bring diverse skills and perspectives to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Redesigned Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is completed successfully.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-20 items-center`}
              >
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="md:w-1/2 relative">
                  {index % 2 === 0 && (
                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full z-10 hidden md:flex items-center justify-center text-white">
                      {index + 1}
                    </div>
                  )}
                  {index % 2 === 1 && (
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full z-10 hidden md:flex items-center justify-center text-white">
                      {index + 1}
                    </div>
                  )}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-lg shadow-lg w-full object-cover"
                    style={{ height: "360px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help achieve your business goals with a custom web solution.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="text-accent">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
