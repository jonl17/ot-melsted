import { ProjectDocument } from '~prismicio-types-d'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  projectDocuments: ProjectDocument[]
}

export default function AbstractColumnGrid({ projectDocuments }: Props) {
  return (
    <div className="flex flex-wrap gap-10">
      {projectDocuments.map((item, key) => {
        // random value between -10 and 10
        const randomX = Math.floor(Math.random() * 31) - 15
        const randomY = Math.floor(Math.random() * 61) - 30

        return (
          <Link href={`/project/${item.uid}`} key={key}>
            <motion.span
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: randomY, x: randomX }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ delay: key * 0.1 }}
              className="grid max-w-[35rem] place-content-center"
            >
              <Image
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
