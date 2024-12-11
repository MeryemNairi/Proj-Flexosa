import Image from 'next/image'

const DoctorsSection = () => {
  const doctors = [
    { name: 'Dr. John Doe', specialty: 'Radiologist', image: '/img/doc1.png' },
    { name: 'Dr. Jane Smith', specialty: 'Neurologist', image: '/img/doc2.png' },
    { name: 'Dr. Mike Johnson', specialty: 'Cardiologist', image: '/img/doc3.png' },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={doctor.image} alt={doctor.name} width={400} height={300} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection

