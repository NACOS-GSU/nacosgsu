"use client"

import type React from "react"

import { Phone, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    title: "Call to ask any question",
    content: "+234 707 527 0924",
    link: "tel:+2347075270924",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@nacos.org.ng",
    link: "mailto:contact@nacos.org.ng",
  },
  {
    icon: MapPin,
    title: "Visit our office",
    content: "National Secretariat",
    link: "https://goo.gl/maps/xxxxx", // Replace with actual Google Maps link
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Send form data to backend
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            If You Have Any Query, Feel
            <br />
            Free To Contact Us
          </h2>
          <div className="w-20 h-1 bg-[#008000] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="flex items-start gap-4 p-4 hover:bg-white rounded-lg transition-colors"
            >
              <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-600 mb-1">{info.title}</h3>
                <p className="font-semibold text-[#008000]">{info.content}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white"
                  required
                />
              </div>
              <Input
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white"
                required
              />
              <Textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px] bg-white"
                required
              />
              <Button type="submit" className="w-full bg-[#008000] hover:bg-[#008000]/90 text-white">
                Send Message
              </Button>
            </form>
          </div>

          <div className="h-[400px] lg:h-auto relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6177.195367586608!2d11.168955991974485!3d10.304519038030874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffd1c1fc765237%3A0xa6bc23d7cb8a8f3f!2sNITDA%20ICT%20Incubation%20Park%2C%20Gombe%20State%20University!5e0!3m2!1sen!2sng!4v1739802222694!5m2!1sen!2sng" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

