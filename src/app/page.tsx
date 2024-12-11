'use client'

import { useState } from 'react'
import HeroSlider from '../components/HeroSlider'
import FeatureSection from '../components/FeatureSection'
import WhyChooseUs from '../components/WhyChooseUs'
import DoctorsSection from '../components/DoctorsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'
import ChatIcon from '../components/Chaticon'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }
  return (
    <div>
      <HeroSlider />
      <FeatureSection />
      <WhyChooseUs />
      <DoctorsSection />
      <TestimonialsSection />
      <BlogSection />
      <ChatIcon toggleChat={toggleChat} />
      <ChatWidget isOpen={isChatOpen} toggleChat={toggleChat} />
    
    </div>
  )
}

