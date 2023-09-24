import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'

export default async function Home() {
  const client = createClient()

  const results = await client.getSingle('footer')
  const homepage = await client.getSingle('homepage')

  return (
    <main>
      <div className="relative z-20 block bg-white lg:mb-[100vh] pb-24">
        <Nav />
        <SliceZone slices={homepage.data.slices} components={components} />
      </div>
      <Footer {...results.data} />
    </main>
  )
}
