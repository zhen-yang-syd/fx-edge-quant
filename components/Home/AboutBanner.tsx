import React from 'react'
import { BlockWrapper } from '../Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { DownOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const AboutBanner = () => {
    const router = useRouter()
    return (
        <>
            <motion.div
                variants={fadeIn("top", "spring", 1 * 0.5, 0.75)}
                className="text-secondary lg:text-[90px] text-[40px] max-w-3xl lg:leading-[100px] font-bold pt-[8rem]"
            >
                <span className='drop-shadow-xl text-white tracking-[1rem] capitalize'>about Midas Market</span>
            </motion.div>
        </>
    )
}

export default BlockWrapper(AboutBanner, '')