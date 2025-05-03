'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Script from 'next/script'
import { categories } from './data'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const filteredCategories = categories.map(category => ({
    ...category,
    sites: category.sites
      .filter(site => 
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name)
        } else if (sortBy === 'popularity') {
          return 0
        }
        return 0
      })
  })).filter(category => category.sites.length > 0)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Navigation | Ultimate AI Tools Directory | Daily Updates | Future Tech Hub | Enterprise AI Solutions | Top AI Apps",
    "description": "One-stop AI tools collection platform, aiming to collect 1000+ high-quality AI tools to help you find the most suitable AI assistant!",
    "url": "https://www.ai-navigation.online",
    "applicationCategory": "ReferenceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI Chat Assistants",
      "AI Creation Tools",
      "AI Office Assistants",
      "AI Programming Tools",
      "AI Video Tools",
      "AI Audio Tools",
      "AI Learning Tools"
    ]
  }

  return (
    <>
      <Head>
        <title>AI Tools Navigation - The Most Comprehensive AI Tools Collection | AI Navigation</title>
        <meta name="description" content="AI Tools Navigation collects the most comprehensive AI tools, including ChatGPT, Claude, Gemini and other AI chat assistants, Midjourney, DALL-E and other AI art tools, as well as various AI office, programming, and video tools. One-stop solution for your AI needs!" />
        <meta name="keywords" content="AI tools, AI navigation, AI websites, AI assistants, AI art, AI office, AI programming, ChatGPT, Claude, Gemini, Midjourney, DALL-E" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ai-navigation.online" />
        <meta property="og:title" content="AI Tools Navigation - The Most Comprehensive AI Tools Collection" />
        <meta property="og:description" content="One-stop AI tools navigation platform, collecting the most comprehensive AI tools to help you find the most suitable AI assistant!" />
        <meta property="og:image" content="https://www.ai-navigation.online/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ai-navigation.online" />
        <meta property="twitter:title" content="AI Tools Navigation - The Most Comprehensive AI Tools Collection" />
        <meta property="twitter:description" content="One-stop AI tools navigation platform, collecting the most comprehensive AI tools to help you find the most suitable AI assistant!" />
        <meta property="twitter:image" content="https://www.ai-navigation.online/og-image.jpg" />
        
        {/* Other meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* Preload key resources */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://www.ai-navigation.online/" />
      </Head>

      {/* Structured data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              The Most Comprehensive AI Tools Navigation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              One-stop AI tools collection platform, aiming to collect 1000+ high-quality AI tools to help you find the most suitable AI assistant!
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Sort by Name</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-4 space-y-2">
                {filteredCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories
                  .find((cat) => cat.name === activeCategory)
                  ?.sites.map((site) => (
                    <a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-center mb-4">
                        <h3 className="text-xl font-semibold text-white">
                          {site.name}
                        </h3>
                      </div>
                      <p className="text-gray-300">
                        {site.description}
                      </p>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 