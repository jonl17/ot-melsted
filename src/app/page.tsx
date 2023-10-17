import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'

export default async function Home() {
  const client = createClient()

  const [results, homepage] = await Promise.all([
    client.getSingle('footer'),
    client.getSingle('homepage'),
  ])

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
export const revalidate = 5
