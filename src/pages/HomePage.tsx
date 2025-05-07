
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const HomePage = () => {
  // Animation effect for elements when they appear in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-fade-in");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies",
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
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users",
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
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      description: "Improve visibility and drive more traffic",
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
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
    },
    {
      title: "E-commerce Solutions",
      description: "Sell your products with custom online stores",
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
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        "WebStudio transformed our online presence with a stunning website that perfectly captures our brand. The results exceeded our expectations!",
      author: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      quote:
        "Professional, responsive and incredibly skilled. Our e-commerce site has seen a 40% increase in conversions since the redesign.",
      author: "Michael Chen",
      company: "GrowthRetail",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      quote:
        "The team at WebStudio delivered our project on-time and on-budget. Their ongoing support has been exceptional.",
      author: "Emma Rodriguez",
      company: "FitLife Gym",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Build <span className="text-primary">Stunning Websites</span> That Convert
              </h1>
              <p className="text-lg mb-8 text-gray-300 md:max-w-md">
                Transform your online presence with custom web solutions that drive results. 
                We blend beautiful design with powerful functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium">
                  Get a Free Quote
                </Button>
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581092921461-fd0e43298234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8fHwxNzE2MzQ1NTU0fDA&ixlib=rb-4.0.3&q=80&w=800"
                alt="Hero"
                className="rounded-lg shadow-2xl animate-fade-in appear"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative shapes */}
        <div className="hidden lg:block absolute -bottom-10 left-10 w-20 h-20 bg-primary rounded-full opacity-10"></div>
        <div className="hidden lg:block absolute -top-10 right-10 w-32 h-32 bg-accent rounded-full opacity-10"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive web solutions tailored to your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse some of our recent projects and see how we've helped businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8fHwxNzE2MzQ1NTU0fDA&ixlib=rb-4.0.3&q=80&w=800"
                alt="E-commerce Project"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">LuxHome E-Commerce</h3>
                <p className="text-gray-200 mb-4">E-commerce website</p>
                <Link to="/portfolio">
                  <Button variant="outline" className="text-white border-white">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8fHwxNzE2MzQ1NTU0fDA&ixlib=rb-4.0.3&q=80&w=800"
                alt="Fitness Website"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">FitLife Gym</h3>
                <p className="text-gray-200 mb-4">Fitness studio website</p>
                <Link to="/portfolio">
                  <Button variant="outline" className="text-white border-white">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8fHwxNzE2MzQ1NTU0fDA&ixlib=rb-4.0.3&q=80&w=800"
                alt="Finance App"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">FinTrack App</h3>
                <p className="text-gray-200 mb-4">Financial dashboard</p>
                <Link to="/portfolio">
                  <Button variant="outline" className="text-white border-white">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button>View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't take our word for it – hear from some of our satisfied clients.
            </p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-navy-800/50 p-8 rounded-lg text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg mb-6 italic text-gray-300">"{testimonial.quote}"</p>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-accent">
                Get Started Now
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
