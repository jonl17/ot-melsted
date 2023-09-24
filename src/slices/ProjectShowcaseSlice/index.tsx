import ProjectShowcase from '@/components/ProjectShowcase'
import { client } from '@/prismic/client'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { useEffect, useState } from 'react'
import { ProjectDocument } from '../../../prismicio-types'

/**
 * Props for `ProjectShowcaseSlice`.
 */
export type ProjectShowcaseSliceProps =
  SliceComponentProps<Content.ProjectShowcaseSliceSlice>

/**
 * Component for "ProjectShowcaseSlice" Slices.
 */
const ProjectShowcaseSlice = ({
  slice,
}: ProjectShowcaseSliceProps): JSX.Element => {
  const [projectDocuments, setProjectDocuments] = useState<ProjectDocument[]>(
    []
  )
  useEffect(() => {
    async function fetchProjectDocuments() {
      return await client.getAllByIDs<ProjectDocument>(
        // @ts-ignore
        slice.items.map((item) => item.showcase.id)
      )
    }
    fetchProjectDocuments().then((d) => setProjectDocuments(d))
  }, [slice.items])

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ProjectShowcase projectDocuments={projectDocuments} />
    </section>
  )
}

export default ProjectShowcaseSlice
