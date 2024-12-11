'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/img/slider1.jpg',
      title: 'Welcome to HealthCare X-Ray',
      subtitle: 'Advanced X-Ray Analysis for Healthcare Professionals'
    },
    {
      image: '/img/slider2.jpg',
      title: 'Cutting-Edge Technology',
      subtitle: 'AI-Powered X-Ray Analysis at Your Fingertips'
    },
    {
      image: '/img/slider3.jpg',
      title: 'Expert Care',
      subtitle: 'Trusted by Leading Healthcare Providers'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Healthcare Hero ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{slide.title}</h1>
              <p className="text-xl text-white mb-8">{slide.subtitle}</p>
              <Link href="/upload" className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Upload X-Ray
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default HeroSlider

