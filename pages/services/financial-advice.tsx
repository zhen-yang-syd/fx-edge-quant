import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '@/components'
import { AboutBg } from '@/public'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { paragrahStyle } from '@/styles'

const FinancialAdvice = () => {
  return (
    <>
      <Head>
        <title>EDGE ARK FINANCIAL SERVICES</title>
        <meta name="description" content="EDGE ARK FINANCIAL SERVICES" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/edge-icon.png" />
      </Head>
      <main className='w-full relative'>
        {/* ===== HERO ===== */}
        <section className='w-full h-[80vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex justify-center items-center text-white text-center'>
            <motion.div
              variants={fadeIn("top", "spring", 0.5, 0.75)}
              className="flex flex-col items-center gap-4 pt-[8rem]"
            >
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>
                Our services
              </span>
              <h1 className='lg:text-[72px] sm:text-[52px] text-[34px] lg:leading-[1.15] leading-[1.2] font-bold text-white tracking-[0.12em]'
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.08)' }}>
                General Financial Advice
              </h1>
              <div className='w-16 h-[2px] bg-white/20 mt-2' />
            </motion.div>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className='w-full bg-white'>
          <div className='paragraph-container'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-gray-400'>Overview</span>
              <h3 className='text-3xl sm:text-4xl font-semibold text-gray-900'>General Financial Advice</h3>
              <div className='w-16 h-[2px] bg-gray-300 mt-2' />
            </div>
            <div className={`${paragrahStyle} flex flex-col gap-4 text-gray-500 max-w-3xl mx-auto`}>
              <p>Edge Ark Pty Ltd (AFSL No: 564271) provides General Financial Advice only. General financial advice is a recommendation or opinion about a financial product that is not tailored to your personal circumstances.</p>
              <p>This means our advice does not take into account your individual objectives, financial situation, or needs. You should consider whether the advice is appropriate for you before acting on it.</p>
            </div>
          </div>
        </section>

        {/* ===== WHAT GENERAL ADVICE COVERS ===== */}
        <section className='w-full' style={{ background: '#0F172A' }}>
          <div className='paragraph-container text-white'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>Details</span>
              <h3 className='text-3xl sm:text-4xl font-semibold'>What General Advice Covers</h3>
              <div className='w-16 h-[2px] bg-white/20 mt-2' />
            </div>
            <div className='flex flex-col gap-6 max-w-3xl mx-auto'>
              <p className='text-white/60 text-lg font-light'>General advice won&apos;t consider your personal circumstances, such as your:</p>
              <ul className='list-disc ml-5 flex flex-col gap-2 text-white/50 text-base capitalize'>
                <li>income</li>
                <li>expenses</li>
                <li>assets</li>
                <li>liabilities</li>
                <li>goals</li>
                <li>risk tolerance</li>
              </ul>
              <div className='w-full h-[1px] bg-white/10' />
              <p className='text-white/60 text-lg font-light'>General advice may help you to identify and narrow down your options. But it won&apos;t tell you how to make the best financial decision for your personal situation.</p>
              <div className='w-full h-[1px] bg-white/10' />
              <p className='text-white/60 text-lg font-light'>General advice is different to factual information. Factual information can give you useful facts about a financial product, such as descriptions of:</p>
              <ul className='list-disc ml-5 flex flex-col gap-2 text-white/50 text-base capitalize'>
                <li>the basic features of a financial product</li>
                <li>the fees and interest rates on a new term deposit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== WHEN APPROPRIATE ===== */}
        <section className='w-full bg-white'>
          <div className='paragraph-container'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-gray-400'>Guidance</span>
              <h3 className='text-3xl sm:text-4xl font-semibold text-gray-900'>When General Advice May Be Appropriate</h3>
              <div className='w-16 h-[2px] bg-gray-300 mt-2' />
            </div>
            <div className='w-full flex flex-row flex-wrap justify-center gap-10'>
              {[
                {
                  heading: 'You may want general advice if you:',
                  items: [
                    'want to compare or confirm your understanding of different financial products. For example, the difference between a managed fund and an ETF',
                    'are researching and learning about different financial topics',
                    "don't want to spend money on tailored advice",
                  ],
                },
                {
                  heading: 'You may be receiving general advice if:',
                  items: [
                    'you were not asked questions about your financial situation, needs and objectives',
                    'you are dealing with someone who will not recommend a specific product for you, but will speak generally about it',
                  ],
                },
                {
                  heading: 'When providing general advice, the provider will:',
                  items: [
                    "tell you the advice is general, meaning it doesn't take into account your own objectives, financial situation or needs",
                    'prompt you to consider if the advice is appropriate for you before acting on it',
                    'in some cases, provide you with a Product Disclosure Statement if the advice is about a financial product',
                  ],
                },
              ].map((col, i) => (
                <div key={i} className='max-w-[320px] flex flex-col gap-5'>
                  <div className='w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold'
                    style={{ background: i === 0 ? '#0F172A' : i === 1 ? '#1E293B' : '#334155' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h5 className='text-base font-medium text-gray-700'>{col.heading}</h5>
                  <ul className={`${paragrahStyle} list-disc ml-5 flex flex-col gap-2 text-gray-500 text-sm`}>
                    {col.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className='w-full relative text-white' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute inset-0 bg-black/50' />
          <div className='footer-container relative'>
            <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10'>
              <h3 className='sm:text-3xl text-xl font-semibold tracking-wide text-center'>
                Get Your Free Initial Consultation
              </h3>
              <Link href='/contact-us'
                className='border border-white/30 rounded-lg button-shadow flex items-center justify-center px-8 py-3 cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-200 min-h-[44px] text-white font-medium tracking-wide'>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default FinancialAdvice
