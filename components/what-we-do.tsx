import Image from "next/image"
import { Presentation, Code, GraduationCap, Trophy } from "lucide-react"

const activities = [
  {
    icon: Presentation,
    title: "Seminars / Bootcamps",
    description: "We organize seminars on practical and theoretical aspects of computing.",
    position: "left",
  },
  {
    icon: Code,
    title: "Hackathons",
    description: "We organize hackathons and competitions for computing students.",
    position: "left",
  },
  {
    icon: GraduationCap,
    title: "Computing Education",
    description: "We provide access to technical contents such as programming, networking etc.",
    position: "right",
  },
  {
    icon: Trophy,
    title: "Scholarships",
    description: "We sponsor students tuition fees, courses, certifications and hardware acquisition.",
    position: "right",
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#008000] font-semibold mb-2">WHAT WE DO</p>
          <h2 className="text-3xl font-bold mb-4">
            We Help Computing Students to Grow
            <br />
            Exponentially
          </h2>
          <div className="w-20 h-1 bg-[#008000] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {activities
              .filter((item) => item.position === "left")
              .map((activity, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Center Column with Image */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/build.jpg"
              alt="NACOS Activities"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {activities
              .filter((item) => item.position === "right")
              .map((activity, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

