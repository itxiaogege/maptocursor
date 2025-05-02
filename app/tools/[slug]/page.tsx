'use client'

import { useParams } from 'next/navigation'
import { categories } from '@/app/page'
import Link from 'next/link'
import { useState } from 'react'

interface Site {
  name: string
  url: string
  description: string
  icon?: string
}

export default function ToolDetail() {
  const params = useParams()
  const slug = params.slug as string
  const [isTranslating, setIsTranslating] = useState(false)

  // 在所有分类中查找匹配的工具
  let tool: Site | null = null
  for (const category of categories) {
    const found = category.sites.find((site: Site) => 
      site.name.toLowerCase().replace(/\s+/g, '-') === slug
    )
    if (found) {
      tool = found
      break
    }
  }

  const handleTranslate = () => {
    if (!tool) return
    
    setIsTranslating(true)
    const translatedUrl = `https://translate.google.com/translate?hl=zh-CN&sl=auto&tl=zh-CN&u=${encodeURIComponent(tool.url)}`
    window.open(translatedUrl, '_blank')
    setIsTranslating(false)
  }

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            工具未找到
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            抱歉，您访问的工具不存在或已被移除。
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {tool.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {tool.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              工具介绍
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {tool.name} 是一个功能强大的AI工具，可以帮助用户完成各种任务。
                它提供了丰富的功能和特性，让用户能够更高效地完成工作。
              </p>
              <p>
                主要特点：
              </p>
              <ul>
                <li>智能对话和问答</li>
                <li>内容创作和编辑</li>
                <li>代码生成和优化</li>
                <li>图像和视频处理</li>
                <li>音频合成和编辑</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              使用指南
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>访问 {tool.name} 官方网站</li>
                <li>注册或登录账号</li>
                <li>选择需要的功能</li>
                <li>开始使用工具</li>
                <li>保存和导出结果</li>
              </ol>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              相关资源
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  官方网站
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  访问 {tool.name} 的官方网站，了解更多信息。
                </p>
              </a>
              <a
                href={`https://docs.${tool.url.replace('https://', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  使用文档
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  查看详细的使用文档和教程。
                </p>
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              ← 返回首页
            </Link>
            <div className="flex gap-4">
              <button
                onClick={handleTranslate}
                disabled={isTranslating}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {isTranslating ? '翻译中...' : '翻译网站'}
              </button>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                立即使用
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 