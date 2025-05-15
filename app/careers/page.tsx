"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { MapPin, Clock, DollarSign, Briefcase, Upload } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Magura, Bangladesh (Remote)",
    type: "Full-time",
    salary: "Competitive",
    description:
      "We're looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.",
    responsibilities: [
      "Design and develop scalable web applications",
      "Work with front-end and back-end technologies",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions",
    ],
    requirements: [
      "5+ years of experience in full stack development",
      "Proficiency in React, Node.js, and related technologies",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving skills",
      "Excellent communication abilities",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "Magura, Bangladesh (Hybrid)",
    type: "Full-time",
    salary: "Competitive",
    description:
      "Join our design team to create beautiful, intuitive interfaces that delight users and solve complex problems.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Maintain design systems and documentation",
      "Stay updated on design trends and best practices",
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools (Figma, Adobe XD)",
      "Portfolio demonstrating strong design skills",
      "Understanding of accessibility standards",
      "Experience working in agile environments",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Operations",
    location: "Magura, Bangladesh (Remote)",
    type: "Full-time",
    salary: "Competitive",
    description:
      "Help us build and maintain robust infrastructure and deployment pipelines for our growing portfolio of applications.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure and containerization",
      "Monitor system performance and security",
      "Automate operational tasks",
      "Collaborate with development teams on deployment strategies",
    ],
    requirements: [
      "3+ years of experience in DevOps or similar role",
      "Experience with Docker, Kubernetes, and CI/CD tools",
      "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Scripting and automation skills",
      "Problem-solving mindset and attention to detail",
    ],
  },
]

type Job = typeof jobOpenings[number];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  const handleApply = (job: Job) => {
    setSelectedJob(job)
    setShowApplicationForm(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Build your career with us and be part of a team that&apos;s innovating the digital future.
            </p>
          </div>

          {showApplicationForm ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="max-w-3xl mx-auto border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Apply for: {selectedJob?.title ?? ""}</CardTitle>
                  <CardDescription>Fill out the form below to apply for this position.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience (years)</Label>
                      <Input id="experience" type="number" min="0" placeholder="Enter years of experience" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        placeholder="Tell us why you're interested in this position and what you can bring to the team"
                        rows={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume/CV</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="resume"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX (MAX. 5MB)</p>
                          </div>
                          <Input id="resume" type="file" className="hidden" accept=".pdf,.docx" />
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setShowApplicationForm(false)}>
                        Back to Jobs
                      </Button>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                      >
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "Innovative Environment",
                    description: "Work on cutting-edge projects using the latest technologies.",
                  },
                  {
                    title: "Growth Opportunities",
                    description: "Continuous learning and career advancement paths for all team members.",
                  },
                  {
                    title: "Work-Life Balance",
                    description: "Flexible work arrangements and policies that respect your personal time.",
                  },
                  {
                    title: "Competitive Benefits",
                    description: "Attractive compensation packages and comprehensive benefits.",
                  },
                  {
                    title: "Collaborative Culture",
                    description: "A supportive team environment where everyone's ideas are valued.",
                  },
                  {
                    title: "Global Impact",
                    description: "Opportunity to work on projects that make a difference worldwide.",
                  },
                ].map((benefit, index) => (
                  <Card key={index} className="card-hover border-0 bg-white dark:bg-gray-800 shadow-lg">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Current <span className="gradient-text">Openings</span>
                </h2>

                <div className="space-y-6">
                  {jobOpenings.map((job) => (
                    <Card key={job.id} className="border-0 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle className="text-2xl">{job.title}</CardTitle>
                            <CardDescription className="mt-1">{job.department}</CardDescription>
                          </div>
                          <Button
                            onClick={() => handleApply(job)}
                            className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                          >
                            Apply Now
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                            <span className="text-gray-600 dark:text-gray-400">{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-blue-500 mr-2" />
                            <span className="text-gray-600 dark:text-gray-400">{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                            <span className="text-gray-600 dark:text-gray-400">{job.salary}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="responsibilities">
                            <AccordionTrigger className="text-lg font-medium">Responsibilities</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                                {job.responsibilities.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="requirements">
                            <AccordionTrigger className="text-lg font-medium">Requirements</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                                {job.requirements.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Don&apos;t see a position that fits?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  We&apos;re always looking for talented individuals to join our team. Send us your resume and
                  we&apos;ll keep you in mind for future opportunities.
                </p>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  size="lg"
                >
                  <Briefcase className="mr-2 h-5 w-5" /> Send Open Application
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
