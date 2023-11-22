import { LinkToMediaField } from '@prismicio/client'
import clsx from 'clsx'

type Props = {
  videoUrl: string
  container: boolean
}

export default function ProjectVideoSection({ videoUrl, container }: Props) {
  return (
    <div className={clsx(container && 'container max-w-4xl', 'mb-24 lg:mb-12')}>
      <div className="relative w-full h-full">
        <video
          className="object-cover w-full lg:h-screen"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl} />
        </video>
      </div>
    </div>
  )
}
