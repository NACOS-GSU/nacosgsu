export default function EventsPage() {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Events</h1>
        <div className="prose max-w-none">
          <p>
            Stay updated with our latest events, bootcamps, hackathons, and tech talks. Join us in building the future of
            computing at GSU.
          </p>
  
          <h2 className="mt-8">Upcoming Events</h2>
          {/* Event listings will go here */}
  
          <h2 className="mt-8">Past Events</h2>
          {/* Past event listings will go here */}
        </div>
      </div>
    )
  }
  
  