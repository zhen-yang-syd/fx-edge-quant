import React, { useState, useEffect } from 'react'
import { navItem } from '@/utils/constants'
import { Logo } from '@/public'
import { useRouter } from 'next/router'
import { NavItem } from '@/components'
import Link from 'next/link'

const TopNavbar = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const navigate = (path: string) => {
    router.push(path)
    setOpen(false)
    setExpandedMenu(null)
  }

  const toggleSubMenu = (name: string) => {
    setExpandedMenu(prev => prev === name ? null : name)
  }

  return (
    <>
      <nav
        className={`z-[80] w-full fixed top-0 left-0
          transition-all duration-500 ease-in-out
          ${scrolled ? 'py-3' : 'py-5'}
        `}
        style={scrolled ? {
          background: 'rgba(8, 10, 25, 0.82)',
          backdropFilter: 'blur(24px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        } : undefined}
        aria-label="Main navigation"
      >
        <div className='w-full max-w-[1200px] mx-auto flex flex-row justify-between items-center px-6'>
          {/* Logo */}
          <Link
            href='/'
            className='flex flex-row gap-3 items-center no-underline group'
            aria-label="Edge Ark - Go to homepage"
          >
            <img
              src={Logo.src}
              alt="Edge Ark Logo"
              className={`w-auto transition-all duration-500 ${scrolled ? 'h-[36px]' : 'h-[42px]'}`}
            />
            <div className='flex flex-col'>
              <span className='font-bold text-lg leading-none text-white tracking-[0.15em] group-hover:text-white/90 transition-colors duration-200'>
                EDGE
              </span>
              <span className='text-[10px] tracking-[0.25em] text-white/40 leading-none mt-0.5'>
                ARK
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className='md:flex flex-row items-center gap-1 hidden'>
            {navItem.map((item, index) => (
              <NavItem key={index} index={index} item={item} />
            ))}
            <div className='w-[1px] h-5 bg-white/10 mx-3' />
            <Link
              href='/contact-us'
              className='px-5 py-2 rounded-md text-[13px] font-medium tracking-wide
                no-underline transition-all duration-200 ease-in-out
                min-h-[36px] flex items-center
                text-white/90 hover:text-white
                border border-white/15 hover:border-white/30
                hover:bg-white/[0.06]'
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className='md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-md
              bg-transparent border border-white/10 cursor-pointer
              hover:bg-white/[0.06] hover:border-white/20
              transition-all duration-200'
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className='block w-[18px] h-[1.5px] bg-white/70 rounded-full' />
            <span className='block w-[14px] h-[1.5px] bg-white/50 rounded-full' />
            <span className='block w-[18px] h-[1.5px] bg-white/70 rounded-full' />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[90] md:hidden
          transition-opacity duration-300 ease-in-out
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
        style={{ background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 z-[100] h-full w-[300px]
          transition-transform duration-300 ease-in-out md:hidden
          flex flex-col
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{
          background: 'rgba(8, 10, 25, 0.92)',
          backdropFilter: 'blur(32px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(32px) saturate(1.2)',
          borderLeft: '1px solid rgba(255,255,255,0.06)',
        }}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className='flex items-center justify-between px-5 py-5'>
          <div className='flex items-center gap-2.5'>
            <img src={Logo.src} alt="Edge Ark Logo" className='w-auto h-[28px] opacity-70' />
            <div className='flex flex-col'>
              <span className='text-white/70 text-xs font-semibold tracking-[0.15em]'>EDGE</span>
              <span className='text-white/30 text-[9px] tracking-[0.2em]'>ARK</span>
            </div>
          </div>
          <button
            className='flex items-center justify-center w-9 h-9 rounded-md
              bg-transparent border border-white/10 cursor-pointer
              hover:bg-white/[0.08] hover:border-white/20
              transition-all duration-200'
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg className='w-4 h-4 text-white/60' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        <div className='w-full h-[1px] bg-white/[0.05]' />

        {/* Drawer nav items */}
        <div className='flex flex-col flex-1 px-3 pt-4 gap-0.5 overflow-y-auto'>
          {navItem.map((item, index) => (
            <div key={index}>
              <button
                className='w-full flex items-center justify-between
                  text-white/70 text-[15px] font-normal
                  px-4 py-3.5 min-h-[48px] rounded-lg
                  bg-transparent border-none cursor-pointer
                  hover:bg-white/[0.04] hover:text-white/90
                  active:bg-white/[0.08]
                  transition-all duration-200 ease-in-out'
                onClick={() => item.subItems ? toggleSubMenu(item.name) : navigate(item.path)}
              >
                <span className='tracking-wide'>{item.name}</span>
                {item.subItems && (
                  <svg
                    className={`w-3.5 h-3.5 text-white/25 transition-transform duration-200 ${expandedMenu === item.name ? 'rotate-180' : ''}`}
                    fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                )}
              </button>

              {item.subItems && (
                <div className={`overflow-hidden transition-all duration-250 ease-in-out
                  ${expandedMenu === item.name ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className='flex flex-col gap-0.5 pl-4 pb-2'>
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.path}
                        className='w-full text-left text-white/40 text-sm
                          px-4 py-3 min-h-[44px] rounded-md
                          bg-transparent border-none cursor-pointer
                          hover:bg-white/[0.04] hover:text-white/70
                          active:bg-white/[0.08]
                          transition-all duration-200 ease-in-out'
                        onClick={() => navigate(subItem.path)}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drawer footer */}
        <div className='px-5 py-5 border-t border-white/[0.05]'>
          <Link
            href='/contact-us'
            onClick={() => setOpen(false)}
            className='w-full py-2.5 rounded-md text-[13px] font-medium tracking-wide
              no-underline flex items-center justify-center
              text-white/80 hover:text-white
              border border-white/15 hover:border-white/30
              hover:bg-white/[0.06]
              transition-all duration-200 min-h-[40px]'
          >
            Get in Touch
          </Link>
          <div className='flex items-center justify-between mt-4'>
            <span className='text-white/20 text-[11px] tracking-wide'>info@edgeark.com.au</span>
            <span className='text-white/15 text-[11px]'>AFSL 564271</span>
          </div>
        </div>
      </aside>
    </>
  )
}

export default TopNavbar