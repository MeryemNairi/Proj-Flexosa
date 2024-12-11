const FeatureSection = () => {
  const features = [
    { icon: 'fa-upload', title: 'Easy Upload', description: 'Securely upload X-ray images with just a few clicks' },
    { icon: 'fa-robot', title: 'AI Analysis', description: 'Advanced AI algorithms for accurate X-ray analysis' },
    { icon: 'fa-file-pdf', title: 'PDF Reports', description: 'Receive comprehensive PDF reports for your records' },
    { icon: 'fa-shield-alt', title: 'Data Security', description: 'Your data is protected with enterprise-grade security' },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className={`text-4xl text-blue-600 mb-4 fas ${feature.icon}`}></div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

