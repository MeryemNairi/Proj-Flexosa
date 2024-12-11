import Link from 'next/link'
import Image from 'next/image';


const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
        <Link href="/">
            <Image
              src="/img/log.png" // Chemin vers l'image du logo
              alt="HealthCare X-Ray Logo"
              width={200} // Largeur du logo
              height={100} // Hauteur du logo
              className="cursor-pointer"
            />
          </Link>          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link></li>
              <li><Link href="/upload" className="btn-primary">Upload X-Ray</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

