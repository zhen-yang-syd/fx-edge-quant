import React from 'react'
import Head from 'next/head'
import { Footer } from '@/components'
import { AboutBg } from '@/public'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { BlockWrapper } from '@/components/Hoc'

const Disclaimer = () => {
  return (
    <>
      <Head>
        <title>EDGE ARK FINANCIAL SERVICES</title>
        <meta name="description" content="EDGE ARK FINANCIAL SERVICES - Privacy Policy & Disclaimer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/edge-icon.png" />
      </Head>
      <main className='w-full relative'>
        {/* ===== HERO ===== */}
        <section className='w-full h-[50vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex justify-center items-center text-white text-center'>
            <motion.div
              variants={fadeIn("top", "spring", 0.5, 0.75)}
              className="flex flex-col items-center gap-4 pt-[8rem]"
            >
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>
                Legal
              </span>
              <h1 className='lg:text-[72px] sm:text-[52px] text-[34px] lg:leading-[1.15] leading-[1.2] font-bold text-white tracking-[0.12em]'
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.08)' }}>
                Privacy &amp; Disclaimer
              </h1>
              <div className='w-16 h-[2px] bg-white/20 mt-2' />
            </motion.div>
          </div>
        </section>

        {/* ===== PRIVACY POLICY ===== */}
        <section className='w-full bg-white'>
          <div className='paragraph-container'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-gray-400'>Your data</span>
              <h3 className='text-3xl sm:text-4xl font-semibold text-gray-900'>Privacy Policy</h3>
              <div className='w-16 h-[2px] bg-gray-300 mt-2' />
            </div>
            <div className='flex flex-col gap-6 max-w-3xl mx-auto text-gray-500 text-base leading-relaxed'>
              <div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>Collection of Personal Information</h4>
                <p>Edge Ark Pty Ltd (AFSL No: 564271) collects personal information that is reasonably necessary for one or more of our functions or activities. The types of personal information we may collect include your name, contact details, financial information, and any other information you provide to us directly.</p>
              </div>
              <div className='w-full h-[1px] bg-gray-200' />
              <div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>Use and Disclosure</h4>
                <p>We use personal information for the purposes for which it was collected, including to provide you with our financial services, to communicate with you, to comply with our legal obligations, and to improve our services. We will not disclose your personal information to third parties unless required by law or with your consent.</p>
              </div>
              <div className='w-full h-[1px] bg-gray-200' />
              <div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>Data Security</h4>
                <p>We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. We hold personal information in both electronic and hard copy formats in secure environments.</p>
              </div>
              <div className='w-full h-[1px] bg-gray-200' />
              <div>
                <h4 className='text-lg font-semibold text-gray-900 mb-3'>Access and Correction</h4>
                <p>You may request access to or correction of your personal information held by us at any time. Please contact us at <a href='mailto:info@edgeark.com.au' className='text-[#0F172A] font-medium hover:underline'>info@edgeark.com.au</a> to make a request.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DISCLAIMER ===== */}
        <section className='w-full' style={{ background: '#0F172A' }}>
          <div className='paragraph-container text-white'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>Important</span>
              <h3 className='text-3xl sm:text-4xl font-semibold'>Disclaimer</h3>
              <div className='w-16 h-[2px] bg-white/20 mt-2' />
            </div>
            <div className='flex flex-col gap-6 max-w-3xl mx-auto text-white/60 text-base leading-relaxed font-light'>
              <p>The information provided on this website is general in nature and does not constitute financial advice. Edge Ark Pty Ltd (AFSL No: 564271) provides General Financial Advice only. Before making any financial decisions, you should consider your own objectives, financial situation and needs, and seek independent professional advice if necessary.</p>
              <div className='w-full h-[1px] bg-white/10' />
              <p>While every effort has been made to ensure the accuracy of the information on this website, Edge Ark Pty Ltd makes no representations or warranties, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics contained on this website for any purpose.</p>
              <div className='w-full h-[1px] bg-white/10' />
              <p>Any reliance you place on such information is strictly at your own risk. Edge Ark Pty Ltd will not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from or in connection with the use of this website.</p>
              <div className='w-full h-[1px] bg-white/10' />
              <p>This website may contain links to external websites that are not maintained by Edge Ark Pty Ltd. We have no control over the content and nature of these sites and the links do not imply a recommendation or endorsement of the views expressed within them.</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default BlockWrapper(Disclaimer, '')
