import React from 'react'
import { BlockWrapper } from '../Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { DownOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const HomeBanner = () => {
    const router = useRouter()
    return (
        <>
            <motion.div
                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                className="text-secondary lg:text-[90px] text-[40px] max-w-3xl lg:leading-[100px] font-bold pt-[8rem]"
            >
                <span className='drop-shadow-xl text-white tracking-[1rem]'>INVESTING</span>
            </motion.div>
            <motion.div
                variants={fadeIn("left", "spring", 1 * 0.5, 0.75)}
                className="text-secondary lg:text-[90px] text-[40px] max-w-3xl lg:leading-[100px] font-bold"
            >
                <span className='drop-shadow-xl text-white tracking-[0.75rem]'>FOR YOUR</span>
            </motion.div>
            <motion.div
                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                className="text-secondary lg:text-[90px] text-[40px] max-w-3xl lg:leading-[100px] font-bold pb-[8rem]"
            >
                <span className='drop-shadow-xl text-white tracking-[1rem]'>FUTURE</span>
            </motion.div>
            <motion.a
                variants={fadeIn("down", "spring", 3 * 0.5, 0.75)}
                className="text-secondary lg:text-[90px] text-[40px] max-w-3xl lg:leading-[100px] font-bold"
                href='#introduction'
            >
                <span className='drop-shadow-xl text-white tracking-[1rem]'><DownOutlined className='animate-bounce text-4xl' /></span>
            </motion.a>
        </>
    )
}

export default BlockWrapper(HomeBanner, '')