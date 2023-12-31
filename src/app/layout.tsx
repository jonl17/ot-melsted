import { createClient } from '@/prismicio'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ShowcaseControls from '@/components/ShowcaseControls/ShowcaseControls'
import GreetScreen from '@/components/GreetScreen/GreetScreen'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient({ fetchOptions: { next: { revalidate: 5 } } })
  const globalSettings = await client.getSingle('page_settings')
  const { page_title, page_description, page_image } = globalSettings.data
  return {
    title: page_title,
    description: page_description,
    openGraph: {
      title: page_title ?? '',
      description: page_description ?? '',
      images: [{ url: page_image.url ?? '' }],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          {children}
          <ShowcaseControls />
        </div>
        <GreetScreen />
      </body>
    </html>
  )
}
