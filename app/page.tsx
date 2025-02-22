import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import WhatWeDo from "@/components/what-we-do"
import WhatWeProvide from "@/components/what-we-provide"
import EventsSection from "@/components/events-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <WhatWeDo />
      <WhatWeProvide />
      <EventsSection />
      <ContactSection />
    </div>
  )
}

