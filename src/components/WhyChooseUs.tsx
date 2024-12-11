const WhyChooseUs = () => {
  const stats = [
    { number: '3000+', label: 'Happy Patients' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Expert Doctors' },
    { number: '12', label: 'Clinic Locations' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

