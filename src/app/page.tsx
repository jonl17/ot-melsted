import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { usePathname } from 'next/navigation'

export const revalidate = 60

export default async function Home() {
  const client = createClient()

  let results
  let homepage

  try {
    results = await client.getSingle('footer', {
      fetchOptions: { cache: 'no-cache' },
    })
    homepage = await client.getSingle('homepage', {
      fetchOptions: { cache: 'no-cache' },
    })
  } catch (error) {
    console.error('Error fetching data: ', error)
  }

  return (
    <main>
      <div className="relative z-20 block bg-white lg:mb-[100vh] pb-24">
        <Nav />
        {homepage && (
          <SliceZone slices={homepage.data.slices} components={components} />
        )}
      </div>
      {results && <Footer {...results.data} />}
    </main>
  )
}
