import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    image: "/build.jpg",
    organization: "NACOS GSU in partnership with Google",
    date: "5th - 7th September 2024",
    title: "Build with AI",
    description:
      "A hands-on workshop and hackathon focused on building AI-powered solutions. Learn cutting-edge AI tools and techniques...",
    link: "#",
  },
  {
    image: "/slide03.jpg",
    organization: "NACOS GSU",
    date: "1st - 3rd October 2024",
    title: "Orientation",
    description:
      "An introductory event for new computing students to learn about NACOS, its activities, and how to get involved...",
    link: "#",
  },
  {
    image: "/slide00.jpg",
    organization: "NACOS GSU",
    date: "15th - 20th November 2024",
    title: "Nacos Week",
    description:
      "A week-long celebration of computing and technology, featuring workshops, competitions, and networking events...",
    link: "#",
  },
];

export default function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Past / Upcoming Events</h2>
          <div className="w-20 h-1 bg-[#008000] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    {event.organization}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                <Button
                  variant="link"
                  className="text-[#008000] p-0 h-auto font-semibold hover:text-[#008000]/80 hover:no-underline"
                  asChild
                >
                  <a href={event.link} className="flex items-center gap-2">
                    READ MORE
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

