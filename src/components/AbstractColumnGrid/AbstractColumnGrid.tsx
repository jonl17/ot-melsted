import { ProjectDocument } from '~prismicio-types-d'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useControlsStore } from '@/stores/controls'

type Props = {
  projectDocuments: ProjectDocument[]
}

export default function AbstractColumnGrid({ projectDocuments }: Props) {
  const updateControls = useControlsStore((state) => state.updateControls)

  return (
    <div className="grid grid-cols-3 gap-[2vw] lg:grid-cols-5">
      {projectDocuments.map((item, key) => {
        return (
          <Link
            className="inline-block"
            href={`/project/${item.uid}`}
            key={key}
            onMouseMove={() => {
              updateControls('text', item.data.title as string)
            }}
            onMouseLeave={() => {
              updateControls('dots')
            }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ delay: key * 0.1 }}
              className="grid items-center h-full"
            >
              <Image
                className="object-contain"
                height={item.data.featured_image.dimensions?.height}
                width={item.data.featured_image.dimensions?.width}
                src={item.data.featured_image.url ?? ''}
                alt={item.data.featured_image.alt ?? ''}
              />
            </motion.span>
          </Link>
        )
      })}
    </div>
  )
}
