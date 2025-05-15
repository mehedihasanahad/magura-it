import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Headphones, Shield, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and challenges.",
    icon: Code,
    features: [
      "Enterprise Resource Planning (ERP) Systems",
      "Customer Relationship Management (CRM) Solutions",
      "Inventory Management Systems",
      "Custom Workflow Automation",
      "Data Analytics Platforms",
      "Legacy System Modernization",
    ],
  },
  {
    id: "web-mobile",
    title: "Web & Mobile App Development",
    description: "Responsive web applications and native mobile apps that deliver exceptional user experiences.",
    icon: Smartphone,
    features: [
      "Progressive Web Applications (PWAs)",
      "Responsive Website Development",
      "E-commerce Platforms",
      "Native iOS & Android Apps",
      "Cross-platform Mobile Solutions",
      "UI/UX Design & Prototyping",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps Solutions",
    description: "Scalable cloud infrastructure and DevOps practices to optimize your development workflow.",
    icon: Cloud,
    features: [
      "Cloud Migration & Strategy",
      "Infrastructure as Code (IaC)",
      "Continuous Integration/Continuous Deployment",
      "Containerization & Orchestration",
      "Microservices Architecture",
      "Cloud Cost Optimization",
    ],
  },
  {
    id: "consulting",
    title: "IT Consulting & Support",
    description: "Strategic IT consulting and reliable technical support to keep your business running smoothly.",
    icon: Headphones,
    features: [
      "IT Strategy Development",
      "Digital Transformation Consulting",
      "Technology Stack Assessment",
      "24/7 Technical Support",
      "IT Infrastructure Management",
      "Staff Augmentation",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures to protect your data and systems from threats.",
    icon: Shield,
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Secure Software Development",
      "Data Protection & Compliance",
      "Security Monitoring & Response",
      "Employee Security Training",
    ],
  },
  {
    id: "ai",
    title: "AI & Automation Solutions",
    description: "Cutting-edge AI and automation technologies to streamline processes and drive innovation.",
    icon: Brain,
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Process Automation",
      "Chatbots & Virtual Assistants",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive IT solutions tailored to transform your business and drive digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="card-hover border-0 bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
