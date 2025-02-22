import Image from "next/image"
import { Phone, Users, MapPin, CheckSquare, Award, BadgeIcon as Certificate, Clock, Wifi } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      {/* Stats Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Members Stats */}
          <div className="bg-[#008000] p-6 rounded-lg text-white">
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8" />
              <div>
                <p className="text-sm uppercase">Members</p>
                <h3 className="text-3xl font-bold">1,000,000+</h3>
              </div>
            </div>
          </div>

          {/* Local Chapters Stats */}
          <div className="bg-[#008000] p-6 rounded-lg text-white">
            <div className="flex items-center gap-4">
              <CheckSquare className="w-8 h-8" />
              <div>
                <p className="text-sm uppercase">Local Chapters</p>
                <h3 className="text-3xl font-bold">250+</h3>
              </div>
            </div>
          </div>

          {/* States Stats */}
          <div className="bg-[#008000] p-6 rounded-lg text-white">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8" />
              <div>
                <p className="text-sm uppercase">States + FCT</p>
                <h3 className="text-3xl font-bold">37</h3>
              </div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-[#008000] font-semibold mb-2">ABOUT US</p>
              <h2 className="text-3xl font-bold mb-6">The Largest and Most Organised Student Body in Africa</h2>
              <div className="w-20 h-1 bg-[#008000] mb-6"></div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Nigeria Association of Computing Students (NACOS) is the umbrella body for students studying Computer
              Science, Computer Engineering, Information Systems, Cyber Security, Software Engineering,
              Telecommunications Engineering and all IT related courses in Nigeria and have been in existence for over
              two decades and NACOS can boast of its presence in almost all tertiary institutions in Nigeria (including
              privately owned ones).
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a membership strength of about One Million (1,000,000) Members in over two hundred and fifty (250)
              local chapters in different tertiary institutions (Universities, Polytechnics, and Colleges of Education)
              across the six (6) geo-political zones of the federation, thus making the association the largest and most
              organized student body in Africa.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#008000]" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#008000]" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Certificate className="w-5 h-5 text-[#008000]" />
                <span>Professional Certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-[#008000]" />
                <span>Technical Access</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-medium">For enquiries, call:</p>
              <a href="tel:+2347033806789" className="flex items-center gap-2 text-[#008000] font-bold mt-1">
                <Phone className="w-5 h-5" />
                +234 703 380 6789
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/nacos.png"
              alt="NACOS Logo"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

