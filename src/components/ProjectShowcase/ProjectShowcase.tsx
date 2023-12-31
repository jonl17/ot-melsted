'use client'
import AbstractColumnGrid from '@/components/AbstractColumnGrid'
import ListAndImages from '@/components/ListAndImages'
import ShowcaseControls from '@/components/ShowcaseControls'
import SingleColumnGrid from '@/components/SingleColumnGrid'
import { useShowcaseLayoutStore } from '@/stores/showcaseLayout'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ProjectDocument } from '../../../prismicio-types'
import { useProjectPagination } from '@/stores/projectPagination'

type Props = {
  projectDocuments: ProjectDocument[]
}

export default function ProjectShowcase({ projectDocuments }: Props) {
  const { layout } = useShowcaseLayoutStore()

  const containerRef = useRef<HTMLDivElement | null>(null)

  function scrollTop() {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full md:min-h-screen pt-24 md:pt-0 bg-white container"
    >
      <section className="py-12 md:py-36">
        <AnimatePresence key={layout}>
          {layout === 'abstract-column' && (
            <AbstractColumnGrid projectDocuments={projectDocuments} />
          )}

          {layout === 'list' && (
            <ListAndImages projectDocuments={projectDocuments} />
          )}

          {layout === 'single-column' && (
            <SingleColumnGrid projectDocuments={projectDocuments} />
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}
