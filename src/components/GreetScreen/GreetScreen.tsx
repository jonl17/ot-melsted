'use client'
import Title from '@/icons/Title'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useControlsStore } from '@/stores/controls'

export default function GreetScreen() {
  const [display, setDisplay] = useState(true)

  const { setTitle } = useControlsStore()

  useEffect(() => {
    setTitle('OT.Melsted')
  }, [setTitle])

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
          className="fixed top-0 left-0 h-screen w-full bg-white z-50 grid place-content-center"
        >
          <Title className="w-full px-4" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
