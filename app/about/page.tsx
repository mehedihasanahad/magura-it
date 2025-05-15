import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">MaguraIT</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Innovating the Digital Future since 2025</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Founded in 2025 in Bangladesh, MaguraIT began with a vision to transform how businesses leverage
                technology. What started as a small team of passionate developers has grown into a comprehensive IT
                solutions provider serving clients worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our journey has been defined by continuous innovation, client-focused solutions, and a commitment to
                excellence in every project we undertake.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/placeholder.svg?height=400&width=600" alt="MaguraIT Office" className="w-full h-auto" />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
                },
                {
                  title: "Excellence",
                  description: "We are committed to the highest standards of quality in everything we do.",
                },
                {
                  title: "Integrity",
                  description: "We build relationships based on trust, transparency, and ethical business practices.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We work closely with our clients to understand their needs and deliver tailored solutions.",
                },
                {
                  title: "Adaptability",
                  description:
                    "We embrace change and continuously evolve to stay ahead in the fast-paced tech landscape.",
                },
                {
                  title: "Client Success",
                  description:
                    "We measure our success by the success of our clients and the value we bring to their businesses.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">
              Our <span className="gradient-text">Vision</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                To be a global leader in innovative IT solutions, empowering businesses to thrive in the digital era
                through technology that transforms, simplifies, and elevates.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
