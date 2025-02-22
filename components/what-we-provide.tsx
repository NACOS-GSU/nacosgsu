import { Shield, Database, Code, Smartphone, Palette, Mail } from "lucide-react"

const courses = [
  {
    title: "Cyber Security",
    description: "Learn how to protect critical systems and sensitive information from digital attacks.",
    icon: Shield,
  },
  {
    title: "Data Science",
    description: "Learn strategies for analyzing data, exploring, and visualizing data using programming languages",
    icon: Database,
  },
  {
    title: "Web Development",
    description: "Learn the process of building websites and applications for the internet or intranet.",
    icon: Code,
  },
  {
    title: "Apps Development",
    description: "Learn the procedures involved in building software for smartphones and other hand-held devices.",
    icon: Smartphone,
  },
  {
    title: "UI / UX Design",
    description: "Learn how to design user interfaces and user experience of softwares used on digital devices.",
    icon: Palette,
  },
]

export default function WhatWeProvide() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            We Provide Professional
            <br />
            Training on the following
            <br />
            Courses:
          </h2>
          <div className="w-20 h-1 bg-[#008000] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#f0f8ff] p-6 rounded-lg flex flex-col items-center text-center group hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-[#008000] rotate-45 mb-6">
                  <course.icon className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </div>
          ))}

          {/* Partnership/Sponsorship Card */}
          <div className="bg-[#008000] p-6 rounded-lg flex flex-col items-center text-center text-white">
            <h3 className="text-xl font-bold mb-3">
              Partnership /
              <br />
              Sponsorship
            </h3>
            <p className="mb-4">For partnership & sponsorship, please send an email to:</p>
            <a href="mailto:nacosnatl@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-5 h-5" />
              nacosnatl@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

