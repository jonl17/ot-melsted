'use client'
import Typography from '@/components/Typography'
import { resolveDocumentPagination } from '@/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Arrow from '@/icons/Arrow'
import { ProjectDocument } from '~prismicio-types-d'
import { useControlsStore } from '@/stores/controls'

type Props = {
  currentUid: string
  documents: ProjectDocument[]
}

export default function ProjectNavigation({ currentUid, documents }: Props) {
  const { nextDocument } = resolveDocumentPagination(currentUid, documents)

  return (
    <nav className="container flex justify-center pt-12 lg:py-24">
      <motion.span layoutId={`project-title-${currentUid}`}>
        <Link
          className="underline hover:opacity-60"
          href={`/project/${nextDocument.uid}`}
        >
          <Arrow />
          <Typography type="large">{nextDocument.data.title}</Typography>
        </Link>
      </motion.span>
    </nav>
  )
}
