import { useShowcaseLayoutStore } from '@/stores/showcaseLayout'
import { ShowcaseLayoutType } from '@/types'
import clsx from 'clsx'

const layoutOptions: ShowcaseLayoutType[] = [
  'single-column',
  'abstract-column',
  'list',
]

type Props = {
  layoutChangeCallback: () => void
}

export default function ShowcaseControls({ layoutChangeCallback }: Props) {
  const { setLayout, layout } = useShowcaseLayoutStore()

  return (
    <div className="sticky z-50 grid justify-center w-full top-16">
      <nav className="flex gap-5 ">
        {layoutOptions.map((availableLayout, key) => (
          <button
            className={clsx('grid content-center w-3 h-3 shadow', {
              'bg-black': layout === availableLayout,
              'bg-gray-300': layout !== availableLayout,
            })}
            onClick={() => {
              setLayout(availableLayout)
              layoutChangeCallback()
            }}
            key={key}
          />
        ))}
      </nav>
    </div>
  )
}
