import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Navigation',
  description: 'AI Tools Navigation collects the most comprehensive AI tools, including ChatGPT, Claude, Gemini and other AI chat assistants, Midjourney, DALL-E and other AI art tools, as well as various AI office, programming, and video tools. One-stop solution for your AI needs!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover the best AI tools and resources" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 