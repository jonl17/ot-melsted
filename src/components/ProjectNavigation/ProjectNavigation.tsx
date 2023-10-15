'use client'
import Typography from '@/components/Typography'
import { resolveDocumentPagination } from '@/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Arrow from '@/icons/Arrow'

type Props = {
  currentUid: string
  uids: string[]
}

export default function ProjectNavigation({ currentUid, uids }: Props) {
  const { previousUid, nextUid } = resolveDocumentPagination(currentUid, uids)

  return (
    <nav className="container flex justify-between pt-12 lg:py-24">
      <Link
        className="underline hover:opacity-60"
        href={`/project/${previousUid}`}
      >
        <Arrow className="md:hidden block rotate-180" />
        <Typography className="hidden md:block" type="large">
          Previous project
        </Typography>
      </Link>
      <motion.span layoutId={`project-title-${currentUid}`}>
        <Link
          className="underline hover:opacity-60"
          href={`/project/${nextUid}`}
        >
          <Arrow className="md:hidden block" />
          <Typography className="hidden md:block" type="large">
            Next project
          </Typography>
        </Link>
      </motion.span>
    </nav>
  )
}
