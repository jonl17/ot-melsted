import Typography from '@/components/Typography'
import { resolveDocumentPagination } from '@/utils'
import Link from 'next/link'

type Props = {
  currentUid: string
  uids: string[]
}

export default function ProjectNavigation({ currentUid, uids }: Props) {
  const { previousUid, nextUid } = resolveDocumentPagination(currentUid, uids)

  return (
    <nav className="container flex justify-between py-12 lg:py-24">
      <Link
        className="underline hover:opacity-60"
        href={`/project/${previousUid}`}
      >
        <Typography type="large">Previous project</Typography>
      </Link>
      <Link className="underline hover:opacity-60" href={`/project/${nextUid}`}>
        <Typography type="large">Next project</Typography>
      </Link>
    </nav>
  )
}
