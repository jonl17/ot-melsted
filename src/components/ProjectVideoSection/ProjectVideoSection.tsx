import { LinkToMediaField } from '@prismicio/client'
import clsx from 'clsx'

type Props = {
  videoUrl: string
  container: boolean
}

export default function ProjectVideoSection({ videoUrl, container }: Props) {
  return (
    <div className={clsx(container && 'container max-w-4xl')}>
      <div className="relative w-full h-full">
        <video className="w-full h--full" autoPlay muted loop playsInline>
          <source src={videoUrl} />
        </video>
      </div>
    </div>
  )
}
