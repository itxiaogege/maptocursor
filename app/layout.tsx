import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Navigation',
  description: 'Discover the best AI tools and resources',
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