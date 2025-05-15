"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechVision",
    content:
      "MaguraIT transformed our business with their innovative software solutions. Their team's expertise and dedication exceeded our expectations.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    position: "CTO, GrowthWave",
    content:
      "Working with MaguraIT has been a game-changer for our company. Their cloud solutions improved our efficiency by 40% and reduced costs significantly.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager, InnovateCorp",
    content:
      "The mobile app developed by MaguraIT received outstanding feedback from our users. Their attention to detail and user experience focus is remarkable.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Kim",
    position: "Director of Operations, NextLevel",
    content:
      "MaguraIT's cybersecurity solutions gave us peace of mind. Their proactive approach to security has protected our data from multiple threats.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from our satisfied clients about their experience working with
            MaguraIT.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <Avatar className="h-20 w-20 border-2 border-blue-500">
                      <AvatarImage
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback>
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="h-8 w-8 text-blue-500 mb-4 mx-auto md:mx-0" />
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 p-0 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
