import { LinkToMediaField } from '@prismicio/client'
import clsx from 'clsx'

type Props = {
  videoUrl: string
  container: boolean
}

export default function ProjectVideoSection({ videoUrl, container }: Props) {
  return (
    <div className={clsx(container && 'container max-w-4xl')}>
      <div className={clsx('relative h-full w-full', {})}>
        <video autoPlay muted loop playsInline>
          <source src={videoUrl} />
        </video>
      </div>
    </div>
  )
}
