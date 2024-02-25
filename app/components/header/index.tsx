'use client'

// import Image from 'next/image'
import { NavItem } from './nav-item'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navItem = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 z-10 h-24 w-full flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          {/* <Image
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="Logo Vini Dev"
          /> */}
          <p>Logo</p>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-4 sm:gap-10">
            {navItem.map((item) => (
              <NavItem {...item} key={item.label} />
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
