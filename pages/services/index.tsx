import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ServicesBanner, Footer } from '@/components'
import { AboutBg } from '@/public'
import { BlockWrapper } from '@/components/Hoc'
import { paragrahStyle } from '@/styles'

const Services = () => {
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
            <ServicesBanner />
          </div>
        </section>

        {/* ===== SERVICE CARDS ===== */}
        <section className='w-full' style={{ background: '#0F172A' }}>
          <div className='paragraph-container text-white'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>Explore</span>
              <h3 className='text-3xl sm:text-4xl font-semibold'>Edge Ark Services</h3>
              <div className='w-16 h-[2px] bg-white/20 mt-2' />
            </div>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
              {[
                {
                  title: 'Financial Advice',
                  href: '/services/financial-advice',
                  text: "General financial advice doesn't take into account your personal situation or goals, or how it might affect you personally. It may help you identify and narrow down your options.",
                  num: '01',
                  accent: '#0F172A',
                },
                {
                  title: 'Sustainable Investment',
                  href: '/services/sustainable-investment',
                  text: 'Sustainable Investing is the practice of using ESG — environmental, social and governance — objectives, themes, and related considerations as a key driver for selecting investments.',
                  num: '02',
                  accent: '#1E293B',
                },
              ].map((card, i) => (
                <Link key={i} href={card.href}
                  className='w-full max-w-[380px] rounded-xl p-6 pb-8
                    flex flex-col gap-4
                    transition-all duration-200 ease-in-out
                    hover:-translate-y-0.5 text-white no-underline cursor-pointer'
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
                  <h4 className='text-lg font-semibold'>{card.title}</h4>
                  <p className={`${paragrahStyle} text-white/50 text-sm`}>{card.text}</p>
                </Link>
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

export default BlockWrapper(Services, 'services')
