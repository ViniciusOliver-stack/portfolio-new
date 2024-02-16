'use client'
import { motion as m } from 'framer-motion'

export default function Contact() {
  return (
    <m.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact</h1>
    </m.div>
  )
}
