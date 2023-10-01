import Typography from '@/components/Typography'
import Link from 'next/link'

type Props = {
  previous: string
  next: string
}

export default function ProjectNavigation({ previous, next }: Props) {
  return (
    <nav className="container flex justify-between py-12 lg:py-24">
      <Link className="underline hover:opacity-60" href={previous}>
        <Typography type="large">Previous project</Typography>
      </Link>
      <Link className="underline hover:opacity-60" href={next}>
        <Typography type="large">Next project</Typography>
      </Link>
    </nav>
  )
}
