import { ProjectDocument } from '~prismicio-types-d'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  projectDocuments: ProjectDocument[]
}

export default function AbstractColumnGrid({ projectDocuments }: Props) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-5">
      {projectDocuments.map((item, key) => {
        // random value between -10 and 10
        const randomX = Math.floor(Math.random() * 21) - 10
        const randomY = Math.floor(Math.random() * 61) - 30

        return (
          <Link href={`/project/${item.uid}`} key={key}>
            <motion.span
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: randomY, x: randomX }}
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
