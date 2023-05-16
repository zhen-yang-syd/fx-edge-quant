import React from 'react'
import Head from 'next/head'
import { Footer, Map } from '@/components'
import { AboutBg } from '@/public'
import { BlockWrapper } from '@/components/Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { Divider, message } from 'antd'
import { FormOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons'

const ContactUs = () => {
  const copyToClipboard = (elementId:string) => {
    const element = document.getElementById(elementId);
    const content = element?.textContent || element?.innerText;

    navigator.clipboard.writeText(content!)
      .then(() => {
        message.success(`Copied ${content} to clipboard.`);
      })
      .catch((error) => {
        message.error('Failed to copy content to clipboard.');
      });
  }
  return (
    <>
      <Head>
        <title>FX-QUANT</title>
        <meta name="description" content="EDGE QUANT FINICIAL TRADING" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className='w-full relative'>
        <div className='w-full h-[30vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center'>
            <motion.div
              variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
              className="text-secondary lg:text-[90px] text-[40px] lg:leading-[100px] font-bold"
            >
              <span className='drop-shadow-xl text-white tracking-[1rem] capitalize'>
                Contact us
              </span>
            </motion.div>
          </div>
        </div>
        <div className='w-full bg-white'>
          <div className='paragraph-container drop-shadow-lg'>
            <div className='w-full flex flex-row flex-wrap justify-center gap-5'>
              {/* map */}
              <Map />
              <div className='w-[600px] flex flex-col gap-5'>
                <div className='flex flex-col gap-2 items-center cursor-pointer'>
                  <div className='flex items-center gap-3 text-lg font-bold'><EnvironmentOutlined />Our Office</div>
                  <div className='text-base' id="address" onClick={()=>copyToClipboard('address')}>201 Elizabeth Street Sydney 2000</div>
                </div>
                <div className='flex flex-col gap-2 items-center cursor-pointer'>
                  <div className='flex items-center gap-3 text-lg font-bold'><MailOutlined />Official Email</div>
                  <div className='text-base' id="email" onClick={()=>copyToClipboard('email')}>info@edgequant.com.au</div>
                </div>
                <Divider className='m-0 my-4'/>
                {/* Form section */}
                <div className='w-full flex flex-col items-center'>
                  <h5 className='text-lg capitalize font-bold flex items-center gap-3'><FormOutlined />Leave us a message</h5>
                  
                </div>
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

export default BlockWrapper(ContactUs,'')