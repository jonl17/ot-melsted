'use client'
import { PAGE_TITLE } from '@/constants'
import Close from '@/icons/Close'
import { useControlsStore } from '@/stores/controls'
import { useShowcaseLayoutStore } from '@/stores/showcaseLayout'
import { ShowcaseLayoutType } from '@/types'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Title from '@/icons/Title'

const layoutOptions: ShowcaseLayoutType[] = [
  'single-column',
  'abstract-column',
  'list',
]

const StateRender = () => {
  const { state, title, closeIcon } = useControlsStore()
  const { layout, setLayout } = useShowcaseLayoutStore()
  function layoutChangeCallback() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }
  const { back, push } = useRouter()
  function goBack() {
    if (document.referrer.includes(window.location.host)) {
      back()
    } else {
      push('/')
    }
  }
  switch (state) {
    case 'logo': {
      return (
        <motion.span
          key={state}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{
            bounce: false,
            duration: 0.2,
          }}
          className="relative block h-4 w-28"
        >
          <Link href="/">
            <Title className="h-full" />
          </Link>
        </motion.span>
      )
    }
    case 'text': {
      return (
        <motion.button
          key={JSON.stringify(title + state)}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{
            bounce: false,
            duration: 0.2,
          }}
          onClick={() => goBack()}
          className="flex items-center gap-1 h-full"
        >
          <motion.h1 className="h-full grid items-center mb-1 text-largeMobile font-untitledMedium font-normal text-black">
            {title}
          </motion.h1>
          {closeIcon && (
            <motion.span
              key={JSON.stringify(closeIcon)}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              exit={{ x: -10 }}
              transition={{ bounce: false, duration: 0.1 }}
            >
              <Close className="h-3 w-3 text-black" />
            </motion.span>
          )}
        </motion.button>
      )
    }
    case 'dots': {
      return (
        <motion.span
          key={state}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            bounce: false,
            duration: 0.2,
            ease: 'anticipate',
          }}
          className="flex gap-3 items-center h-full"
        >
          {layoutOptions.map((availableLayout, key) => (
            <motion.button
              initial={{ y: '-100%' }}
              animate={{ y: '0' }}
              exit={{ y: '100%' }}
              transition={{ delay: key * 0.05 }}
              className={clsx(
                'grid content-center w-5 h-5 shadow rounded-full backdrop-blur-xl',
                {
                  'bg-black': layout === availableLayout,
                  'bg-gray/50': layout !== availableLayout,
                }
              )}
              onClick={() => {
                setLayout(availableLayout)
                layoutChangeCallback()
              }}
              key={key}
            />
          ))}
        </motion.span>
      )
    }
    default:
      return null
  }
}

export default function ShowcaseControls() {
  const { updateControls, state } = useControlsStore()

  const pathname = usePathname()

  useEffect(() => {
    function callback() {
      // only applies to the homepage
      if (pathname === '/') {
        if (window.scrollY < window.innerHeight * 0.65) {
          updateControls('logo')
        } else {
          updateControls('dots')
        }
      }
    }

    document.addEventListener('scroll', callback)
    return () => document.removeEventListener('scroll', callback)
  }, [pathname, updateControls])

  useEffect(() => {
    if (pathname === '/') {
      updateControls('logo')
    }
  }, [pathname, updateControls])

  return (
    <div className="fixed z-40 grid justify-center w-full top-6">
      <motion.nav
        className={clsx(
          'h-6 flex items-center rounded-full px-2 overflow-hidden transition-all',
          {
            'bg-gray/50': state !== 'dots',
          }
        )}
      >
        <StateRender />
      </motion.nav>
    </div>
  )
}
