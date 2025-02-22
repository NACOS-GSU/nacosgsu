import Image from "next/image"
import Link from "next/link"
import { Twitter, Facebook, Linkedin, MapPin, Mail, Phone } from "lucide-react"

const usefulLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "National Executives", href: "/executives" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
]

const popularLinks = [
  { name: "New Chapter Registration", href: "/register-chapter" },
  { name: "Annual Chapter Dues", href: "/chapter-dues" },
  { name: "NACOS Membership Registration", href: "/membership" },
  { name: "NCS Student Membership Registration", href: "/ncs-membership" },
]

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/nacosnational" },
  { icon: Facebook, href: "https://facebook.com/nacosnational" },
  { icon: Linkedin, href: "https://linkedin.com/company/nacosnational" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/nacos.png"
                alt="NACOS NATIONAL"
                width={200}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria Association of Computing Students (NACOS) is the Umbrella body for students studying Computer
              Science, Computer Engineering, Information Systems, Cyber Security and all IT related courses in Nigeria.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Get In Touch
              <div className="w-12 h-1 bg-[#008000] mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#008000] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">National Secretariat:</p>
                  <p className="text-gray-400 text-sm">
                    Nigeria Computer Society
                    <br />
                    Plot 10 Otunba Jobi Fele-way,
                    <br />
                    Alausa Ikeja, Lagos State,
                    <br />
                    Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#008000]" />
                <a href="mailto:nacosnatl@gmail.com" className="text-gray-400 hover:text-white">
                  nacosnatl@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#008000]" />
                <a href="tel:+2347033806789" className="text-gray-400 hover:text-white">
                  +234 703 380 6789
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#008000] p-2 rounded-md hover:bg-[#008000]/80 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Useful Links
              <div className="w-12 h-1 bg-[#008000] mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white flex items-center gap-2">
                    <span className="text-[#008000]">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Popular Links
              <div className="w-12 h-1 bg-[#008000] mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {popularLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white flex items-center gap-2">
                    <span className="text-[#008000]">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

