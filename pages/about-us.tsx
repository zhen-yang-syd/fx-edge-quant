import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AboutBanner, Footer } from '@/components'
import { AboutBg } from '@/public'
import { Divider } from 'antd'
import { paragrahStyle } from '@/styles'

const AboutUs = () => {
  const router = useRouter()
  return (
    <>
      <Head>
				<title>EDGE QUANT FUND MANAGEMENT</title>
				<meta name="description" content="EDGE QUANT FINICIAL TRADING" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/edge-icon.svg" />
			</Head>
      <main className='w-full relative'>
        <div className='w-full h-[60vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center'>
            <AboutBanner />
          </div>
        </div>
        <div className='w-full bg-[#373737]'>
          <div className='paragraph-container text-white'>
            <h3 className='font-normal text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>edge quant group</h3>
            <div className='px-4' id="about-introduction">
              <p className={`${paragrahStyle} font-light`}>
                EDGE via its alliances offers you a broad range of trading opportunities whether you’re an experienced trader, or just getting started. EDGE is 100 percent Australian owned and managed by the principal owners which means we are committed to offering you the best service and servicing your trading needs. Our mission is to provide investment solutions for serious investors who value personal service.
              </p>
              <Divider className='bg-white m-0 my-4' />
              <p className={`${paragrahStyle} font-light`}>
                Our clients vary by age, they include individuals, corporate, high net worth individuals, overseas nationals and other major financial institutions. Our clients require various levels of advice and service from us, the balance of the partnership is what is important, and trust and integrity are paramount in the close working relationship between Alpha Securities and each client.
              </p>
              <Divider className='bg-white m-0 my-4' />
              <p className={`${paragrahStyle} font-light`}>
                We work with you the client to ensure that all are working towards the same financial goals. Quality, accuracy and dependability are &apos;must haves&apos; in the development of successful financial plans.
              </p>
              <Divider className='bg-white m-0 my-4' />
              <p className={`${paragrahStyle} font-light`}>
                At EDGE we are backed by a powerful network of support services, including active investment research resources, compliance, technology, on-going educational support, professional development and access to a broad range of investment products.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full relative cursor-default text-white' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
          <div className='footer-container'>
            <div className='w-full flex flex-row justify-center gap-10'>
              <span className='capitalize sm:text-3xl text-sm flex items-center'>get your free initial consultation</span>
              <button className='border-[1px] border-white rounded-sm button-shadow flex items-center justify-center px-4 py-2'>Contact Us</button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default AboutUs