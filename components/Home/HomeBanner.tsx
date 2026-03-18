import React from 'react'
import { BlockWrapper } from '../Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Link from 'next/link'

const HomeBanner = () => {
    return (
        <div className="flex flex-col items-center gap-8 pt-[10rem] pb-[6rem]">
            {/* Eyebrow */}
            <motion.div
                variants={fadeIn("down", "spring", 0.3, 0.75)}
                className="flex items-center gap-3"
            >
                <div className='w-8 h-[1px] bg-white/30' />
                <span className='text-xs font-medium tracking-[0.3em] uppercase text-white/50'>
                    Edge Ark Financial Services
                </span>
                <div className='w-8 h-[1px] bg-white/30' />
            </motion.div>

            {/* Main headline */}
            <motion.h1
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="lg:text-[82px] sm:text-[56px] text-[38px] lg:leading-[1.05] leading-[1.1] font-bold text-center"
            >
                <span className='block text-white tracking-[0.06em]'
                    style={{ textShadow: '0 2px 40px rgba(255,255,255,0.06)' }}>
                    Investing For
                </span>
                <span className='block mt-1 tracking-[0.06em]'
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: 'none',
                    }}>
                    Your Future
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                variants={fadeIn("up", "spring", 0.7, 0.75)}
                className="text-white/50 text-base sm:text-lg font-light max-w-[520px] text-center leading-relaxed"
            >
                Boutique financial services with a professional touch.
                <br className='hidden sm:block' />
                Strategic alliances across all facets of the financial markets.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
                variants={fadeIn("up", "spring", 0.9, 0.75)}
                className="flex flex-row items-center gap-4 mt-2"
            >
                <Link
                    href='/services'
                    className='px-7 py-3 rounded-lg text-sm font-semibold tracking-wide
                        text-[#0F172A] no-underline
                        transition-all duration-200 ease-in-out
                        hover:opacity-90 hover:shadow-lg hover:shadow-white/10
                        min-h-[44px] flex items-center'
                    style={{ background: 'rgba(255,255,255,0.95)' }}
                >
                    Our Services
                </Link>
                <Link
                    href='/contact-us'
                    className='px-7 py-3 rounded-lg text-sm font-semibold tracking-wide
                        text-white no-underline
                        border border-white/25
                        transition-all duration-200 ease-in-out
                        hover:bg-white/10 hover:border-white/40
                        min-h-[44px] flex items-center'
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                    Get in Touch
                </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.a
                variants={fadeIn("up", "spring", 1.3, 0.75)}
                href='#introduction'
                className='mt-8 inline-flex flex-col items-center gap-2 group cursor-pointer no-underline'
                aria-label="Scroll to introduction"
            >
                <span className='text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-white/50 transition-colors duration-200'>
                    Discover
                </span>
                <div className='w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent' />
            </motion.a>
        </div>
    )
}

export default BlockWrapper(HomeBanner, '')