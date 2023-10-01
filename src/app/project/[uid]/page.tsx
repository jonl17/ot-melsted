import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import ProjectNavigation from '@/components/ProjectNavigation/ProjectNavigation'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'

export const revalidate = 60

export default async function ProjectPage({
  params,
}: {
  params: { uid: string }
}) {
  const client = createClient()

  const projectDocument = await client.getByUID('project', params.uid)
  const footerDocument = await client.getSingle('footer')

  if (!projectDocument) {
    throw new Error('uid not valid')
  }

  return (
    <main>
      <div className="relative z-20 block bg-white lg:mb-[100vh] pb-24">
        <Nav />
        <SliceZone
          slices={projectDocument.data.slices}
          components={components}
        />
        <ProjectNavigation />
      </div>
      <Footer {...footerDocument.data} />
    </main>
  )
}
