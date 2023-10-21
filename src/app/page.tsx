import Footer from '@/components/Footer/Footer'
import GreetScreen from '@/components/GreetScreen/GreetScreen'
import Nav from '@/components/Nav/Nav'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { revalidatePath } from 'next/cache'

export default async function Home() {
  const client = createClient({ fetchOptions: { next: { revalidate: 5 } } })

  const [results, homepage] = await Promise.all([
    client.getSingle('footer'),
    client.getSingle('homepage'),
  ])

  return (
    <main>
      <div className="relative z-20 block bg-white lg:mb-[100vh] pb-24">
        {homepage && (
          <SliceZone slices={homepage.data.slices} components={components} />
        )}
      </div>
      {results && <Footer {...results.data} />}

      <GreetScreen />
    </main>
  )
}
