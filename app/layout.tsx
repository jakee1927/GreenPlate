import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./styles.css"
import "./output.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GreenPlate | Sustainable Plant-Based Cuisine",
  description:
    "Experience the true taste of nature with our farm-to-table approach and commitment to sustainable practices.",
  icons: {
    icon: [
      { url: 'favicon.ico' },
      { url: 'favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: 'apple-touch-icon.png' }
    ],
    other: [
      { url: 'android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: 'android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: 'site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}