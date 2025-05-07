
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
      name: "Sarah Johnson",
      role: "Lead Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Sarah is a UI/UX expert with a passion for creating beautiful, user-friendly interfaces that drive results.",
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Michael specializes in front-end development with expertise in React, Vue, and modern JavaScript frameworks.",
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

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is completed successfully.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Timeline Items */}
            {/* Step 1 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold mb-3">Discovery & Planning</h3>
                  <p className="text-gray-600">
                    We start by understanding your business goals, target audience, and project requirements. This phase includes market research and creating a strategic project plan.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzA1OQ&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Discovery & Planning"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 order-last md:text-left">
                  <h3 className="text-xl font-bold mb-3">Design & Prototyping</h3>
                  <p className="text-gray-600">
                    We create wireframes and design mockups that align with your brand and meet user expectations. You'll review and approve designs before we move to development.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 md:order-first">
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzE2OA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Design & Prototyping"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold mb-3">Development</h3>
                  <p className="text-gray-600">
                    Our developers bring the designs to life with clean, efficient code. We build your website or application using modern technologies and best practices.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzI3Mg&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Development"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 order-last md:text-left">
                  <h3 className="text-xl font-bold mb-3">Testing & Launch</h3>
                  <p className="text-gray-600">
                    We thoroughly test your website across devices and browsers before launch. After deployment, we provide training and ongoing support to ensure your continued success.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 md:order-first">
                  <img
                    src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODM4MzM1OQ&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Testing & Launch"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
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
