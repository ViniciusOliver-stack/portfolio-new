import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TbArrowNarrowUp } from 'react-icons/tb'
import { Button } from '../button'

export function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!showButton && window.scrollY > 500) {
      setShowButton(true)
    }
    if (showButton && window.scrollY <= 500) {
      setShowButton(false)
    }
  }, [showButton])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {showButton ? (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <Button className="rounded-full border p-2" onClick={scrollToTop}>
            <TbArrowNarrowUp size={20} />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
