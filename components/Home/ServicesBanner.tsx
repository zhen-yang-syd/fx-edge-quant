import React from 'react'
import { BlockWrapper } from '../Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { DownOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const ServicesBanner = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col gap-6'>
            <motion.div
                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                className="text-secondary lg:text-[90px] text-[40px] lg:leading-[100px] font-bold"
            >
                <span className='drop-shadow-xl text-white tracking-[1rem] capitalize'>
                    .MDA Services
                </span>
            </motion.div>
            <motion.div
                variants={fadeIn("right", "spring", 2 * 0.5, 0.75)}
                className="text-secondary lg:text-[90px] text-[40px] lg:leading-[100px] font-bold"
            >
                <span className='drop-shadow-xl text-white tracking-[1rem] capitalize'>
                    .financial advice
                </span>
            </motion.div>
            <motion.div
                variants={fadeIn("right", "spring", 3 * 0.5, 0.75)}
                className="text-secondary lg:text-[90px] text-[40px] lg:leading-[100px] font-bold"
            >
                <span className='drop-shadow-xl text-white tracking-[1rem] capitalize'>
                    .sustainable investment
                </span>
            </motion.div>
        </div>
    )
}

export default BlockWrapper(ServicesBanner, '')