"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const categories = ["All", "Web Development", "Mobile Apps", "Custom Software", "Cloud Solutions", "AI & Automation"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "A comprehensive e-commerce solution with advanced product filtering, payment integration, and inventory management.",
    client: "RetailTech Inc.",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Custom Software",
    image: "/placeholder.svg?height=300&width=500",
    description: "An integrated healthcare management system for patient records, appointment scheduling, and billing.",
    client: "MediCare Group",
  },
  {
    id: 3,
    title: "Delivery Tracking App",
    category: "Mobile Apps",
    image: "/placeholder.svg?height=300&width=500",
    description: "A real-time delivery tracking application with GPS integration and automated notifications.",
    client: "FastDelivery",
  },
  {
    id: 4,
    title: "Cloud Migration Project",
    category: "Cloud Solutions",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Migration of legacy systems to a scalable cloud infrastructure with improved security and performance.",
    client: "FinTech Solutions",
  },
  {
    id: 5,
    title: "AI-Powered Customer Service",
    category: "AI & Automation",
    image: "/placeholder.svg?height=300&width=500",
    description: "An intelligent chatbot system that handles customer inquiries and provides personalized responses.",
    client: "ServiceFirst Corp",
  },
  {
    id: 6,
    title: "Inventory Management System",
    category: "Custom Software",
    image: "/placeholder.svg?height=300&width=500",
    description: "A comprehensive inventory management solution with barcode scanning and automated reordering.",
    client: "Global Logistics",
  },
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our successful projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-gradient-to-r from-blue-600 to-cyan-500" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-hover border-0 bg-white dark:bg-gray-800 shadow-lg overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">Client: {project.client}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
