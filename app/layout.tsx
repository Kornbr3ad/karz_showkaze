import './globals.css'

import { Footer, Navbar } from '@/components'

export const metadata = {
  title: 'Klazik Karz',
  description: 'Discover All Klazik Karz in the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
