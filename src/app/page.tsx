import Footer from '@/components/Footer/Footer'
import GreetScreen from '@/components/GreetScreen/GreetScreen'
import Nav from '@/components/Nav/Nav'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { revalidatePath, revalidateTag } from 'next/cache'

export default async function Home() {
  const client = createClient({ fetchOptions: { next: { tags: ['prismic'] } } })

  const [results, homepage] = await Promise.all([
    client.getSingle('footer'),
    client.getSingle('homepage'),
  ])

  revalidateTag('prismic')

  return (
    <main>
      <div className="relative z-20 block bg-white lg:mb-[100vh] pb-24">
        {homepage && (
          <SliceZone slices={homepage.data.slices} components={components} />
        )}
      </div>
      {results && <Footer {...results.data} />}
    </main>
  )
}
