'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Upload() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
      setResult(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setAnalyzing(true)
    // Simulating analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    setAnalyzing(false)
    setResult('X-ray analysis complete. No abnormalities detected.')
  }

  const handleGeneratePDF = () => {
    // In a real application, this would generate and download a PDF report
    alert('PDF report generated and downloaded.')
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Upload X-Ray Image</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="x-ray-upload" className="block text-gray-700 font-bold mb-2">
              Choose X-Ray Image
            </label>
            <input
              type="file"
              id="x-ray-upload"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-gray-700 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {preview && (
            <div className="mb-6">
              <Image src={preview} alt="X-Ray Preview" width={400} height={400} className="mx-auto rounded-lg shadow-md" />
            </div>
          )}
          <div className="flex justify-center">
            <button
              onClick={handleUpload}
              disabled={!file || analyzing}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {analyzing ? 'Analyzing...' : 'Analyze X-Ray'}
            </button>
          </div>
          {result && (
            <div className="mt-6 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>
              <p className="text-gray-700 mb-4">{result}</p>
              <button
                onClick={handleGeneratePDF}
                className="btn-secondary"
              >
                Generate PDF Report
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-100 py-20 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-upload"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">1. Upload X-Ray</h3>
              <p className="text-gray-600">Select and upload your X-ray image securely.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">2. AI Analysis</h3>
              <p className="text-gray-600">Our advanced AI algorithms analyze the X-ray.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-file-medical-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">3. Get Results</h3>
              <p className="text-gray-600">Receive a detailed report of the analysis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

