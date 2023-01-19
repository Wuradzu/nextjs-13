import '../styles/globals.css'
import Link from "next/link"
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
