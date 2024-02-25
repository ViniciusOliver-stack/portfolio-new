import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  href: string
  label: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50',
      )}
    >
      <span className="text-emerald-400">#</span>
      <div className="relative overflow-hidden group">
        <span className="invisible">{label}</span>
        <span className="text-neutral-400 absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
          {label}
        </span>
        <span className="text-emerald-400 absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
          {label}
        </span>
      </div>
    </Link>
  )
}
