import AnimatedPageWrap from '@/components/AnimatedPageWrap/AnimatedPageWrap'
import ProjectNavigation from '@/components/ProjectNavigation/ProjectNavigation'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'
import { revalidateTag } from 'next/cache'

export async function generateMetadata({
  params,
}: {
  params: { uid?: string }
}): Promise<Metadata> {
  const client = createClient({ fetchOptions: { next: { tags: ['prismic'] } } })
  const pageSettings = await client.getSingle('page_settings')
  const projectDoc = await client.getByUID('project', params.uid ?? '')

  revalidateTag('prismic')

  // backup
  const { page_title, page_description, page_image } = pageSettings.data
  // overwrite
  const { seo_title, seo_description, seo_image } = projectDoc.data
  return {
    title: seo_title ?? page_title,
    description: seo_description ?? page_description,
    openGraph: {
      title: seo_title ?? page_title ?? '',
      description: seo_description ?? page_description ?? '',
      images: [{ url: seo_image.url ?? page_image.url ?? '' }],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: { uid: string }
}) {
  const client = createClient({ fetchOptions: { next: { revalidate: 5 } } })

  const [projectDocument, homepageDocument] = await Promise.all([
    client.getByUID('project', params.uid),
    await client.getSingle('homepage'),
  ])

  // the project pagination order is in the same order
  // as the documents in ProjectShowCaseSlice on the homepage.
  const homepageProjectSliceDoc = homepageDocument.data.slices.find(
    (slice) => slice.slice_type === 'project_showcase_slice'
  )
  const paginationUids = homepageProjectSliceDoc?.items
    .filter((item) => item.showcase)
    .map(
      // @ts-ignore
      (item) => item.showcase.uid
    ) as string[]

  // project documents in the homepage slice
  const paginationDocuments = await client.getAllByUIDs(
    'project',
    paginationUids
  )

  return (
    <main>
      <div className="relative z-20 block bg-white pt-12 pb-24">
        <AnimatedPageWrap title={projectDocument.data.title ?? ''}>
          <SliceZone
            slices={projectDocument.data.slices}
            components={components}
          />
          <ProjectNavigation
            currentUid={projectDocument.uid}
            documents={paginationDocuments}
          />
        </AnimatedPageWrap>
      </div>
    </main>
  )
}
