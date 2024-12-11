const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'Patient', quote: 'The X-ray analysis provided by HealthCare X-Ray was incredibly fast and accurate. It helped my doctor diagnose my condition quickly.' },
    { name: 'Dr. Michael Brown', role: 'Radiologist', quote: 'As a radiologist, I find the AI-powered analysis to be an invaluable tool in my practice. It has significantly improved our workflow.' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="font-bold">{testimonial.name}</div>
              <div className="text-gray-600">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

