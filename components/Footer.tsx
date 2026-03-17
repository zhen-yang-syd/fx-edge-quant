import React from 'react'
import { navItem } from '@/utils/constants'
import { Logo } from '@/public'
import Link from 'next/link'
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
        <footer className='w-full text-white' style={{ background: '#0F172A' }}>
            {/* Main Footer */}
            <div className='max-w-[1200px] mx-auto px-6 pt-16 pb-10'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8'>

                    {/* Brand Column */}
                    <div className='md:col-span-4 flex flex-col gap-6'>
                        <Link href='/' className='flex flex-row gap-4 items-center no-underline'>
                            <img src={Logo.src} alt="Edge Ark Financial Services Logo" className='w-auto h-[44px]' />
                            <div className='flex flex-col text-white'>
                                <span className='font-bold text-xl tracking-[0.15em]'>EDGE</span>
                                <span className='text-sm text-white/60 tracking-[0.2em]'>ARK</span>
                            </div>
                        </Link>
                        <p className='text-sm text-white/40 leading-relaxed max-w-[280px]'>
                            An exciting boutique Financial Services Firm committed to the highest standards of professionalism and integrity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='md:col-span-3'>
                        <h4 className='text-sm font-medium tracking-[0.2em] uppercase text-white/40 mb-5'>Navigation</h4>
                        <nav className='flex flex-col gap-3' aria-label="Footer navigation">
                            {navItem.map((item, index) => (
                                <Link key={index} href={item.path}
                                    className='text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline'>
                                    {item.name}
                                </Link>
                            ))}
                            <Link href='/disclaimer'
                                className='text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline'>
                                Privacy Policy
                            </Link>
                            <a href='/fsg.pdf' target='_blank' rel='noopener noreferrer'
                                className='text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline'>
                                Financial Services Guide
                            </a>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className='md:col-span-2'>
                        <h4 className='text-sm font-medium tracking-[0.2em] uppercase text-white/40 mb-5'>Services</h4>
                        <nav className='flex flex-col gap-3' aria-label="Footer services">
                            <Link href='/services/financial-advice'
                                className='text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline'>
                                Financial Advice
                            </Link>
                            <Link href='/services/sustainable-investment'
                                className='text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline'>
                                Sustainable Investment
                            </Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className='md:col-span-3'>
                        <h4 className='text-sm font-medium tracking-[0.2em] uppercase text-white/40 mb-5'>Contact</h4>
                        <div className='flex flex-col gap-4'>
                            <Link href='https://www.google.com/maps/place/99+Bathurst+St,+Sydney+NSW+2000'
                                target='_blank' rel='noopener noreferrer'
                                className='flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline'>
                                <EnvironmentOutlined className='mt-0.5 flex-shrink-0' />
                                <span>1404/99 Bathurst Street, Sydney, NSW 2000</span>
                            </Link>
                            <Link href='mailto:info@edgeark.com.au'
                                className='flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline'>
                                <MailOutlined className='flex-shrink-0' />
                                <span>info@edgeark.com.au</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='w-full' style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className='max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3'>
                    <span className='text-xs text-white/30'>
                        &copy; 2026 Edge Ark Pty Ltd. AFSL No: 564271. All rights reserved.
                    </span>
                    <div className='flex items-center gap-3'>
                        <Link href='/disclaimer'
                            className='text-xs text-white/30 hover:text-white/60 transition-colors duration-200 no-underline'>
                            Privacy Policy &middot; Disclaimer
                        </Link>
                        <span className='text-white/15'>|</span>
                        <a href='/fsg.pdf' target='_blank' rel='noopener noreferrer'
                            className='text-xs text-white/30 hover:text-white/60 transition-colors duration-200 no-underline'>
                            FSG
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
