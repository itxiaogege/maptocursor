'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { categories } from '@/app/page'

interface Site {
  name: string
  url: string
  description: string
  icon?: string
}

export default function ToolDetail() {
  const { slug } = useParams()
  const [isTranslating, setIsTranslating] = useState(false)

  const tool = categories
    .flatMap(category => category.sites)
    .find((site: Site) => site.name.toLowerCase() === (slug as string).toLowerCase()) || null

  const handleTranslate = () => {
    setIsTranslating(true)
    const translateUrl = `https://translate.google.com/translate?hl=en&sl=auto&tl=zh-CN&u=${encodeURIComponent(tool?.url || '')}`
    window.open(translateUrl, '_blank')
    setIsTranslating(false)
  }

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tool Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">The tool you are looking for does not exist.</p>
          <Link href="/" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            Return to Homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Homepage
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{tool.name}</h1>
              <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Use Now
            </a>
            <button
              onClick={handleTranslate}
              disabled={isTranslating}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
            >
              {isTranslating ? 'Translating...' : 'Translate Website'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {tool.name} is a powerful AI tool that helps you {tool.description.toLowerCase()}. It provides a user-friendly interface and advanced features to enhance your productivity and creativity.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Usage Guide</h2>
            <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Visit the official website</li>
              <li>Create an account or sign in</li>
              <li>Explore the features and tools</li>
              <li>Start using the AI capabilities</li>
              <li>Save and export your work</li>
            </ol>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Resources</h2>
          <div className="space-y-4">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Official Website
            </a>
            <a
              href={`${tool.url}/docs`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Documentation
            </a>
            <a
              href={`${tool.url}/tutorials`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Tutorials
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 