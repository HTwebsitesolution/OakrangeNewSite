import Image from 'next/image'
import Link from 'next/link'

export function BrandLogo({ variant = 'default' }) {
  const isDark = variant === 'dark'
  return (
    <Link href="/" className={`flex items-center gap-3 ${isDark ? '' : 'pt-1'}`}>
      <Image
        src="/oakrange-3d-logo.png"
        alt="Oakrange Engineering Ltd"
        width={220}
        height={60}
        priority
        className={`${isDark ? 'h-[90.225px] w-auto' : 'h-[112.78125px] w-auto'} logo-animated logo-hover-effect logo-color-adjust`}
      />
    </Link>
  )
}
