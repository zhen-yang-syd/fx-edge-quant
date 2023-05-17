import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components'
import { AboutBg } from '@/public'
import { BlockWrapper } from '@/components/Hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import Link from 'next/link'

const SustainableInvestment = () => {
  return (
    <>
      <Head>
				<title>EDGE QUANT FUND MANAGEMENT</title>
				<meta name="description" content="EDGE QUANT FINICIAL TRADING" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/edge-icon.svg" />
			</Head>
      <main className='w-full relative'>
        <div className='w-full h-[80vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center'>
            <motion.div
              variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
              className="text-secondary lg:text-[90px] text-[40px] lg:leading-[100px] font-bold"
            >
              <span className='drop-shadow-xl text-white tracking-[1rem] capitalize'>
                Sustainable Investment
              </span>
            </motion.div>
          </div>
        </div>
        <div className='w-full bg-white'>
          <div className='paragraph-container text-black drop-shadow-lg'>
            <h3 className='font-semibold text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>Sustainable investment</h3>
            <div className='flex flex-col gap-4 text-gray-500 capitalize'>
              <p>Sustainable Investing is the practice of using ESG </p>
              <p>— environmental, social and governance</p>
              <p>— objectives, themes, and related considerations as a key driver for selecting investments.</p>
              <p>— Combined with traditional financial analysis, this lens is an inclusive category that contains numerous approaches for pursuing better risk-adjusted returns.</p>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-300'>
          <div className='paragraph-container text-black drop-shadow-lg'>
            <h3 className='font-semibold text-3xl underline decoration-white decoration-[1px] decoration-offline underline-offset-[20px] capitalize text-center'>What is ESG?</h3>
            <p className='text-gray-500 text-center'>ESG refers to specific considerations that can be used as part of investment decision-making:</p>
            <div className='flex flex-row flex-wrap gap-10 justify-center text-gray-500'>
              <div className='button-shadow flex flex-col gap-2 pt-4 pb-8 px-4 rounded-sm max-w-[300px] cursor-pointer'>
                <h4 className='text-lg'>Environmental (E)</h4>
                <p>Carbon emissions, waste and recycling and supply chain management</p>
              </div>
              <div className='button-shadow flex flex-col gap-2 pt-4 pb-8 px-4 rounded-sm max-w-[300px] cursor-pointer'>
                <h4 className='text-lg'>Social (S)</h4>
                <p>Diversity issues, health and safety and human rights</p>
              </div>
              <div className='button-shadow flex flex-col gap-2 pt-4 pb-8 px-4 rounded-sm max-w-[300px] cursor-pointer'>
                <h4 className='text-lg'>Governance (G)</h4>
                <p>Board structure/ size, transparency, and ownership structure</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative cursor-default text-white' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='footer-container'>
            <div className='w-full flex flex-row justify-center gap-10'>
              <span className='capitalize text-3xl'>get your free initial consultation</span>
              <button className='border-[1px] border-white rounded-sm button-shadow flex items-center justify-center px-4 py-2'>Contact Us</button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default BlockWrapper(SustainableInvestment,'sustainable-investment')