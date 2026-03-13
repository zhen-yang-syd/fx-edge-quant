import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '@/components'
import { AboutBg } from '@/public'
import { BlockWrapper } from '@/components/Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { paragrahStyle } from '@/styles'

const SustainableInvestment = () => {
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
                Sustainable Investment
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
              <h3 className='text-3xl sm:text-4xl font-semibold text-gray-900'>Sustainable Investment</h3>
              <div className='w-16 h-[2px] bg-gray-300 mt-2' />
            </div>
            <div className={`${paragrahStyle} flex flex-col gap-4 text-gray-500 max-w-3xl mx-auto`}>
              <p>Sustainable Investing is the practice of using ESG — environmental, social and governance — objectives, themes, and related considerations as a key driver for selecting investments.</p>
              <p>Combined with traditional financial analysis, this lens is an inclusive category that contains numerous approaches for pursuing better risk-adjusted returns.</p>
            </div>
          </div>
        </section>

        {/* ===== WHAT IS ESG ===== */}
        <section className='w-full' style={{ background: '#0F172A' }}>
          <div className='paragraph-container text-white'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>Framework</span>
              <h3 className='text-3xl sm:text-4xl font-semibold'>What is ESG?</h3>
              <div className='w-16 h-[2px] bg-white/20 mt-2' />
            </div>
            <p className='text-white/50 text-center max-w-2xl mx-auto'>ESG refers to specific considerations that can be used as part of investment decision-making:</p>
            <div className='flex flex-row flex-wrap gap-10 justify-center'>
              {[
                {
                  title: 'Environmental (E)',
                  text: 'Carbon emissions, waste and recycling and supply chain management',
                  accent: '#0F172A',
                  num: 'E',
                },
                {
                  title: 'Social (S)',
                  text: 'Diversity issues, health and safety and human rights',
                  accent: '#1E293B',
                  num: 'S',
                },
                {
                  title: 'Governance (G)',
                  text: 'Board structure/size, transparency, and ownership structure',
                  accent: '#334155',
                  num: 'G',
                },
              ].map((card, i) => (
                <div key={i}
                  className='w-full max-w-[320px] rounded-xl p-6 pb-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5'
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  <div className='w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold'
                    style={{ background: card.accent }}>
                    {card.num}
                  </div>
                  <h4 className='text-lg font-semibold text-white'>{card.title}</h4>
                  <p className='text-white/50 text-sm'>{card.text}</p>
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

export default BlockWrapper(SustainableInvestment, 'sustainable-investment')
