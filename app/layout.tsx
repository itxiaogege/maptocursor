import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 导航站',
  description: '发现最好的 AI 工具和资源',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="发现最好的 AI 工具和资源" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 