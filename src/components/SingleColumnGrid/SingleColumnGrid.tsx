import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectDocument } from '~prismicio-types-d'

type Props = {
  projectDocuments: ProjectDocument[]
}

export default function SingleColumnGrid({ projectDocuments }: Props) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid justify-center gap-56"
    >
      {projectDocuments.map((item, key) => (
        <Link href={`/project/${item.uid}`} key={key}>
          <motion.span
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="relative grid justify-center"
          >
            <Image
              className="object-contain h-full max-h-[750px]"
              height={500}
              width={item.data.featured_image.dimensions?.width}
              src={item.data.featured_image.url ?? ''}
              alt={item.data.featured_image.alt ?? ''}
            />
          </motion.span>
        </Link>
      ))}
    </motion.div>
  )
}
