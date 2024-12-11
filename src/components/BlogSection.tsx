import Image from 'next/image'
import Link from 'next/link'

const BlogSection = () => {
  const blogPosts = [
    { title: 'Advancements in X-Ray Technology', date: 'May 15, 2023', image: '/img/A1.jpg' },
    { title: 'The Role of AI in Radiology', date: 'May 10, 2023', image: '/img/A2.jpg' },
    { title: 'Improving Patient Care with Digital Health', date: 'May 5, 2023', image: '/img/A3.jpg' },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.date}</p>
                <Link href="#" className="text-blue-600 font-semibold hover:underline">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection

