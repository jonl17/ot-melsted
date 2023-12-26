'use client'
import Typography from '@/components/Typography'
import Close from '@/icons/Close'
import Title from '@/icons/Title'
import { useControlsStore } from '@/stores/controls'
import { useShowcaseLayoutStore } from '@/stores/showcaseLayout'
import { ShowcaseLayoutType } from '@/types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

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
          className="flex items-center h-full gap-1 pt-1"
        >
          <motion.h1 className="grid items-center h-full mb-1 font-normal text-black text-largeMobile font-untitledMedium">
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
              <Close className="w-4 h-4 pb-1 text-black" />
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
          className="flex items-center h-full gap-3"
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
    case 'wip': {
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
          className="relative block w-full"
        >
          <Typography className="font-medium" type="nav">
            New website opening 2024
          </Typography>
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

  // useEffect(() => {
  //   function callback() {
  //     // only applies to the homepage
  //     if (pathname === '/') {
  //       if (window.scrollY < window.innerHeight * 0.65) {
  //         updateControls('logo')
  //       } else {
  //         updateControls('dots')
  //       }
  //     }
  //   }

  //   document.addEventListener('scroll', callback)
  //   return () => document.removeEventListener('scroll', callback)
  // }, [pathname, updateControls])

  // useEffect(() => {
  //   if (pathname === '/') {
  //     updateControls('logo')
  //   }
  // }, [pathname, updateControls])

  return (
    <div className="fixed z-[999] grid justify-center w-full top-6">
      <motion.nav
        className={clsx(
          'h-8 flex items-center rounded-full px-3 overflow-hidden transition-all',
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
