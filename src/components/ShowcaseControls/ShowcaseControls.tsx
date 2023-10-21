import { useShowcaseLayoutStore } from '@/stores/showcaseLayout'
import { ShowcaseLayoutType } from '@/types'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const layoutOptions: ShowcaseLayoutType[] = [
  'abstract-column',
  'list',
  'single-column',
]

type Props = {
  layoutChangeCallback: () => void
}

export default function ShowcaseControls({ layoutChangeCallback }: Props) {
  const { setLayout, layout } = useShowcaseLayoutStore()

  return (
    <div className="sticky z-50 grid justify-center w-full top-[90vh] md:top-8">
      <motion.nav
        whileTap={{ scale: 0.9 }}
        className="flex gap-5 h-12 bg-gray/50 rounded-full items-center px-6 shadow"
      >
        {layoutOptions.map((availableLayout, key) => (
          <motion.button
            className={clsx('grid content-center w-3 h-3 shadow rounded-full', {
              'bg-white': layout === availableLayout,
              'bg-darkgray/50': layout !== availableLayout,
            })}
            onClick={() => {
              setLayout(availableLayout)
              layoutChangeCallback()
            }}
            key={key}
          />
        ))}
      </motion.nav>
    </div>
  )
}
