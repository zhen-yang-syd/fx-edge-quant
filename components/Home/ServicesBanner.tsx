import React from 'react'
import { BlockWrapper } from '../Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const ServicesBanner = () => {
    return (
        <motion.div
            variants={fadeIn("top", "spring", 0.5, 0.75)}
            className="flex flex-col items-center gap-4 pt-[8rem]"
        >
            <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>
                What we offer
            </span>
            <h1 className='lg:text-[72px] sm:text-[52px] text-[34px] lg:leading-[1.15] leading-[1.2] font-bold text-white tracking-[0.12em]'
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.08)' }}>
                Our Services
            </h1>
            <div className='w-16 h-[2px] bg-white/20 mt-2' />
        </motion.div>
    )
}

export default BlockWrapper(ServicesBanner, '')
