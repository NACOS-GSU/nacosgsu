import ContactSection from "./ContactSection"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="prose max-w-none">
        <p>
          Get in touch with NACOS GSU. We're here to answer your questions and help you get involved with our community.
        </p>

        <ContactSection />
      </div>
    </div>
  )
}

