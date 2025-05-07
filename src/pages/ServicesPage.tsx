
import React from "react";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      id: "web-development",
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
      details: [
        "Custom website development",
        "Progressive Web Apps (PWA)",
        "React, Vue.js, and Angular applications",
        "WordPress development and customization",
        "E-commerce solutions",
        "API development and integration",
      ],
    },
    {
      id: "ui-ux-design",
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
      details: [
        "User interface design",
        "User experience research and analysis",
        "Wireframing and prototyping",
        "Responsive design for all devices",
        "Brand identity and visual design",
        "Usability testing",
      ],
    },
    {
      id: "seo-optimization",
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
      details: [
        "On-page SEO optimization",
        "Technical SEO audits",
        "Content strategy and creation",
        "Local SEO optimization",
        "Search engine ranking improvement",
        "SEO reporting and analysis",
      ],
    },
    {
      id: "maintenance-support",
      title: "Maintenance & Support",
      description: "Ongoing support to keep your site running smoothly",
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
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2" />
          <path d="M12 22v-2" />
          <path d="m17 20.66-1-1.73" />
          <path d="M11 10.27 7 3.34" />
          <path d="m20.66 17-1.73-1" />
          <path d="m3.34 7 1.73 1" />
          <path d="M14 12h8" />
          <path d="M2 12h2" />
          <path d="m20.66 7-1.73 1" />
          <path d="m3.34 17 1.73-1" />
          <path d="m17 3.34-1 1.73" />
          <path d="m7 20.66-1-1.73" />
        </svg>
      ),
      details: [
        "Website maintenance and updates",
        "Security monitoring and protection",
        "Performance optimization",
        "Backup and disaster recovery",
        "Content updates and management",
        "24/7 technical support",
      ],
    },
    {
      id: "ecommerce-solutions",
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
      details: [
        "Custom e-commerce website development",
        "Shopping cart and checkout optimization",
        "Payment gateway integration",
        "Product catalog management",
        "Order management systems",
        "Customer account management",
      ],
    },
  ];

  const packages = [
    {
      title: "Basic",
      price: "$1,999",
      description: "Perfect for small businesses just getting started",
      features: [
        "5-page responsive website",
        "Basic SEO setup",
        "Contact form",
        "Mobile-friendly design",
        "Social media integration",
      ],
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$3,999",
      description: "Ideal for growing businesses seeking more features",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "Content management system",
        "Lead generation forms",
        "Google Analytics integration",
        "Blog setup",
        "Social media integration",
        "3 months of support",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For established businesses with complex requirements",
      features: [
        "Custom website architecture",
        "Advanced e-commerce functionality",
        "Custom application development",
        "Comprehensive SEO strategy",
        "Database integration",
        "API development",
        "Priority support",
        "12 months of support",
      ],
      isPopular: false,
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for building a website depends on its complexity. A basic website might take 2-4 weeks, while more complex sites with custom functionality can take 8-12 weeks. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely! All our websites are built with responsive design, ensuring they look great and function properly on all devices, including smartphones, tablets, and desktop computers.",
    },
    {
      question: "Do you provide website hosting?",
      answer:
        "Yes, we offer reliable website hosting services with regular backups, security monitoring, and technical support. We can also help you set up hosting with a third-party provider if you prefer.",
    },
    {
      question: "What if I need changes after the website is launched?",
      answer:
        "We offer ongoing maintenance and support packages to handle updates, changes, and improvements to your website after launch. You can choose from monthly or annual support plans based on your needs.",
    },
    {
      question: "How do you handle website security?",
      answer:
        "Security is a top priority. We implement SSL certificates, security plugins, regular updates, and monitoring to protect your website from threats. We also provide regular backups to ensure your data is safe.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-300 mb-8">
              We offer comprehensive web solutions tailored to your unique business needs.
              From stunning designs to powerful functionality, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600">
              We provide end-to-end web solutions that help businesses grow their online presence and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.slice(0, 4).map((detail, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to={`/contact?service=${service.id}`} className="w-full">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600">
              We follow a proven step-by-step approach to ensure every project is successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-6 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-3 text-center">Discovery</h3>
              <p className="text-gray-600 text-center">
                We learn about your business goals, target audience, and project requirements.
              </p>
              {/* Connector line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10 transform -translate-x-8"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-6 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-3 text-center">Design</h3>
              <p className="text-gray-600 text-center">
                We create wireframes and visual designs that align with your brand and goals.
              </p>
              {/* Connector line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10 transform -translate-x-8"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-6 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-3 text-center">Development</h3>
              <p className="text-gray-600 text-center">
                We build your website with clean code and modern technologies.
              </p>
              {/* Connector line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10 transform -translate-x-8"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-6 mx-auto">4</div>
              <h3 className="text-xl font-bold mb-3 text-center">Launch & Support</h3>
              <p className="text-gray-600 text-center">
                We deploy your site and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-gray-600">
              Choose the package that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="relative">
                {pkg.isPopular && (
                  <div className="absolute top-0 -translate-y-1/2 inset-x-0 m-auto w-fit px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <Card className={`border ${pkg.isPopular ? "border-accent shadow-lg" : "border-gray-200"}`}>
                  <CardHeader>
                    <CardTitle className="text-center">{pkg.title}</CardTitle>
                    <div className="text-center">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      {pkg.price !== "Custom" && <span className="text-gray-500">/project</span>}
                    </div>
                    <CardDescription className="text-center">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-accent mr-2"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/contact" className="w-full">
                      <Button className={`w-full ${pkg.isPopular ? "" : "bg-navy-800 hover:bg-navy-700"}`}>
                        Get Started
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-gray-600">
              Need a custom solution? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives results for your business.
          </p>
          <Link to="/contact">
            <Button size="lg">Get a Free Consultation</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
