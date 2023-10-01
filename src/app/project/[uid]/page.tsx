import AnimatedPageWrap from '@/components/AnimatedPageWrap/AnimatedPageWrap'
import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import ProjectNavigation from '@/components/ProjectNavigation/ProjectNavigation'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { resolveDocumentPagination } from '@/utils'
import { SliceZone } from '@prismicio/react'
import { AnimatePresence } from 'framer-motion'
import { ProjectDocument } from '~prismicio-types-d'

export const revalidate = 60

export default async function ProjectPage({
  params,
}: {
  params: { uid: string }
}) {
  const client = createClient()

  const projectDocument = await client.getByUID('project', params.uid)
  const footerDocument = await client.getSingle('footer')

  const homepageDocument = await client.getSingle('homepage')

  // the project pagination order is in the same order
  // as the documents in ProjectShowCaseSlice on the homepage.
  const homepageProjectSliceDoc = homepageDocument.data.slices.find(
    (slice) => slice.slice_type === 'project_showcase_slice'
  )
  const paginationUids = homepageProjectSliceDoc?.items.map(
    // @ts-ignore
    (item) => item.showcase.uid
  ) as string[]

  return (
    <main>
      <div className="relative z-20 block bg-white lg:mb-[100vh] pb-24">
        <Nav replaceAbout={projectDocument.data.title as string} />
        <AnimatedPageWrap>
          <SliceZone
            slices={projectDocument.data.slices}
            components={components}
          />
          <ProjectNavigation
            currentUid={projectDocument.uid}
            uids={paginationUids}
          />
        </AnimatedPageWrap>
      </div>
      <Footer {...footerDocument.data} />
    </main>
  )
}
