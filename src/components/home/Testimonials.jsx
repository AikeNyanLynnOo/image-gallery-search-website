"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content:
        "Impressa has completely transformed how I share my photography. The platform's beautiful design and supportive community have helped me grow my audience exponentially.",
      author: "Sarah Johnson",
      role: "Professional Photographer",
      avatar: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    {
      id: 2,
      content:
        "As a travel photographer, I needed a platform that would showcase my work beautifully while protecting my copyright. Impressa delivers on all fronts with an incredible user experience.",
      author: "Michael Chen",
      role: "Travel Photographer",
      avatar: "/placeholder.svg?height=100&width=100&text=MC",
    },
    {
      id: 3,
      content:
        "The collections feature on Impressa has allowed me to organize my portfolio in a way that tells a story. My clients love browsing through my themed collections.",
      author: "Emma Rodriguez",
      role: "Portrait Artist",
      avatar: "/placeholder.svg?height=100&width=100&text=ER",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primaryTeal-100/5 via-transparent to-secondaryTeal-100/5 dark:from-primaryTeal-100/10 dark:via-transparent dark:to-secondaryTeal-100/10"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primaryTeal-100/5 dark:bg-primaryTeal-100/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondaryTeal-100/5 dark:bg-secondaryTeal-100/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-primary-100 dark:text-primaryDark-100 mb-4">
            What our users are saying
          </h2>
          <p className="text-lg text-primary-100/70 dark:text-primaryDark-100/70 max-w-2xl mx-auto">
            Join thousands of photographers who are already sharing their work
            on Impressa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-neutralWhite-100 dark:bg-dark-200 rounded-2xl border border-gray-200 dark:border-dark-100 p-8 shadow-xl">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-primaryTeal-100 to-secondaryTeal-100 rounded-full blur opacity-30"></div>
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100">
                          <Quote className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-center mb-8">
                      <p className="text-xl text-primary-100 dark:text-primaryDark-100 leading-relaxed mb-6">
                        {`"${testimonial.content}"`}
                      </p>
                      <footer className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primaryTeal-100/20">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg text-primary-100 dark:text-primaryDark-100">
                            {testimonial.author}
                          </div>
                          <div className="text-primary-100/70 dark:text-primaryDark-100/70">
                            {testimonial.role}
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 transition-all ${
                  activeIndex === index
                    ? "bg-primaryTeal-100 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-primaryTeal-100/50 dark:hover:bg-primaryTeal-100/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
