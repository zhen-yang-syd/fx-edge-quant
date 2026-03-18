import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AboutBanner, Footer } from '@/components'
import { AboutBg } from '@/public'
import { paragrahStyle } from '@/styles'

const AboutUs = () => {
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
        <section className='w-full h-[60vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex justify-center items-center text-white text-center'>
            <AboutBanner />
          </div>
        </section>

        {/* ===== ABOUT CONTENT ===== */}
        <section className='w-full' style={{ background: '#0F172A' }}>
          <div className='paragraph-container text-white'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>Our story</span>
              <h3 className='text-3xl sm:text-4xl font-semibold'>Edge Ark Group</h3>
              <div className='w-16 h-[2px] bg-white/20 mt-2' />
            </div>
            <div className='flex flex-col gap-0 max-w-3xl mx-auto' id="about-introduction">
              <p className={`${paragrahStyle} text-white/60 font-light`}>
                EDGE via its alliances offers you a broad range of trading opportunities whether you&apos;re an experienced trader, or just getting started. EDGE is 100 percent Australian owned and managed by the principal owners which means we are committed to offering you the best service and servicing your trading needs. Our mission is to provide investment solutions for serious investors who value personal service.
              </p>
              <div className='w-full h-[1px] bg-white/10 my-6' />
              <p className={`${paragrahStyle} text-white/60 font-light`}>
                Our clients vary by age, they include individuals, corporate, high net worth individuals, overseas nationals and other major financial institutions. Our clients require a high level of service from us, the balance of the partnership is what is important, and trust and integrity are paramount in the close working relationship between Edge Ark and each client.
              </p>
              <div className='w-full h-[1px] bg-white/10 my-6' />
              <p className={`${paragrahStyle} text-white/60 font-light`}>
                We work with you the client to ensure that all are working towards the same financial goals. Quality, accuracy and dependability are &apos;must haves&apos; in the development of successful financial plans.
              </p>
              <div className='w-full h-[1px] bg-white/10 my-6' />
              <p className={`${paragrahStyle} text-white/60 font-light`}>
                At EDGE we are backed by a powerful network of support services, including active investment research resources, compliance, technology, on-going educational support, professional development and access to a broad range of investment products.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className='w-full relative text-white' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
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

export default AboutUs
