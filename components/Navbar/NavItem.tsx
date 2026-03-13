import { FC, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
    index: number,
    item: {
        name: string,
        path: string,
        subItems?: {
            name: string,
            path: string
        }[]
    }
}

const NavItem: FC<Props> = ({ index, item }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const isActive = router.pathname === item.path || (item.subItems && router.pathname.startsWith(item.path) && item.path !== '/')

    const handleEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setOpen(true)
    }

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 150)
    }

    // Don't render Contact Us in the main nav — it's in the CTA button
    if (item.path === '/contact-us') return null

    return (
        <div
            className='relative'
            onMouseEnter={item.subItems ? handleEnter : undefined}
            onMouseLeave={item.subItems ? handleLeave : undefined}
        >
            <Link
                href={item.path}
                className={`text-[13px] font-medium cursor-pointer
                    flex items-center gap-1.5 py-2 px-3.5 rounded-md
                    transition-all duration-200 ease-in-out
                    no-underline min-h-[36px]
                    ${isActive
                        ? 'text-white bg-white/[0.08]'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                    }`}
                onClick={() => setOpen(false)}
            >
                {item.name}
                {item.subItems && (
                    <svg
                        className={`w-3 h-3 text-white/30 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                        fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                )}
            </Link>

            {item.subItems && (
                <div
                    className={`absolute top-full left-0 mt-2 min-w-[200px] py-2 rounded-lg
                        transition-all duration-200 ease-in-out origin-top
                        ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-[0.97] invisible pointer-events-none'}
                    `}
                    style={{
                        background: 'rgba(8, 10, 25, 0.88)',
                        backdropFilter: 'blur(24px) saturate(1.2)',
                        WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.03) inset',
                    }}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    {item.subItems.map((subItem) => {
                        const isSubActive = router.pathname === subItem.path
                        return (
                            <Link
                                key={subItem.path}
                                href={subItem.path}
                                className={`block text-[13px]
                                    px-4 py-2.5 mx-1.5 rounded-md
                                    cursor-pointer no-underline
                                    transition-all duration-200 ease-in-out
                                    ${isSubActive
                                        ? 'text-white bg-white/[0.08]'
                                        : 'text-white/50 hover:text-white/90 hover:bg-white/[0.05]'
                                    }`}
                                onClick={() => setOpen(false)}
                            >
                                {subItem.name}
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default NavItem