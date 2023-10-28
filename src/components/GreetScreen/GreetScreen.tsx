'use client'
import Title from '@/icons/Title'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useControlsStore } from '@/stores/controls'
import { PAGE_TITLE } from '@/constants'

export default function GreetScreen() {
  const [display, setDisplay] = useState(true)

  const updateControls = useControlsStore((state) => state.updateControls)

  useEffect(() => {
    updateControls('logo')
  }, [updateControls])

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    }, 1000)
  }, [])

  return (
    <AnimatePresence>
      {display ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed top-0 left-0 h-screen w-full bg-white z-50 grid place-content-center"
        >
          <Title className="w-full h-96 px-12 lg:px-56" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
