const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HealthCare X-Ray</h3>
            <p className="text-gray-400">Providing advanced X-ray analysis for healthcare professionals.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              <li><a href="/upload" className="text-gray-400 hover:text-white transition duration-300">Upload X-Ray</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Medical Center Dr.<br />Healthville, HC 12345</p>
            <p className="text-gray-400 mt-2">Phone: (123) 456-7890<br />Email: info@healthcarexray.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2023 HealthCare X-Ray. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

