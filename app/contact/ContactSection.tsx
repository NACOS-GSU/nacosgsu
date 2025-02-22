"use client"

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
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-8">
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
  );
}