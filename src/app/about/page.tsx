import Image from 'next/image'

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="section-title">About HealthCare X-Ray</h1>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image src="/img/aboutus.jpg" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At HealthCare X-Ray, our mission is to provide healthcare professionals with cutting-edge tools for X-ray analysis. We strive to improve patient care through accurate and efficient diagnostics.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-700 mb-6">
              Our team consists of experienced radiologists, AI specialists, and software engineers working together to deliver the best X-ray analysis solution for healthcare professionals.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
            <p className="text-gray-700">
              We utilize state-of-the-art AI algorithms and machine learning techniques to provide accurate and reliable X-ray analysis. Our platform is designed to be user-friendly and efficient, allowing healthcare professionals to focus on patient care.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Patient-Centric</h3>
              <p className="text-gray-600">We put patients first in everything we do, ensuring our technology contributes to better healthcare outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">We continuously push the boundaries of technology to improve X-ray analysis and diagnostics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Security</h3>
              <p className="text-gray-600">We prioritize the security and privacy of patient data, adhering to the highest standards of data protection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

