import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Tools Navigation AI Tools for Your Needs',
  description: 'AI Tools Navigation collects, including ChatGPT, Claude, Gemini and other AI art tools, as well as various AI office, programming, and video tools',
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
        <meta name="description" content="AI Tools Navigation collects, including ChatGPT, Claude, Gemini and other AI art tools, as well as various AI office, programming, and video tools" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 