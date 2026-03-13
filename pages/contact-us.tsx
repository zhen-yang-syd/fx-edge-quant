import React, { useState } from 'react'
import Head from 'next/head'
import { Footer } from '@/components'
import { AboutBg } from '@/public'
import { BlockWrapper } from '@/components/Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { message } from 'antd'
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/Map'), { ssr: false })
import { Input, Form, Button } from 'antd'
import axios from 'axios'

const ContactUs = () => {
  const copyToClipboard = (elementId: string) => {
    const element = document.getElementById(elementId);
    const content = element?.textContent || element?.innerText;

    navigator.clipboard.writeText(content!)
      .then(() => {
        message.success(`Copied ${content} to clipboard.`);
      })
      .catch(() => {
        message.error('Failed to copy content to clipboard.');
      });
  }

  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      await axios.post(`/api/send-email`, values)
      message.success('Message sent successfully')
      form.resetFields()
    }
    catch (err) {
      message.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = () => {
    message.error('Please fill in all required fields')
  }

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
        <section className='w-full h-[50vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex justify-center items-center text-white text-center'>
            <motion.div
              variants={fadeIn("top", "spring", 0.5, 0.75)}
              className="flex flex-col items-center gap-4 pt-[8rem]"
            >
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>
                Get in touch
              </span>
              <h1 className='lg:text-[72px] sm:text-[52px] text-[34px] lg:leading-[1.15] leading-[1.2] font-bold text-white tracking-[0.12em]'
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.08)' }}>
                Contact Us
              </h1>
              <div className='w-16 h-[2px] bg-white/20 mt-2' />
            </motion.div>
          </div>
        </section>

        {/* ===== CONTACT CONTENT ===== */}
        <section className='w-full bg-white'>
          <div className='paragraph-container'>
            <div className='flex flex-col gap-3 items-center text-center'>
              <span className='text-sm font-medium tracking-[0.2em] uppercase text-gray-400'>Reach out</span>
              <h3 className='text-3xl sm:text-4xl font-semibold text-gray-900'>We&apos;d Love to Hear From You</h3>
              <div className='w-16 h-[2px] bg-gray-300 mt-2' />
            </div>
            <div className='w-full flex flex-row flex-wrap justify-center gap-10'>
              {/* Map */}
              <Map />
              <div className='w-full max-w-[600px] flex flex-col gap-5'>
                {/* Contact Info */}
                <div className='flex flex-col gap-4'>
                  <button
                    className='flex flex-row items-start gap-4 cursor-pointer bg-transparent border-none p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 min-h-[44px] text-left'
                    onClick={() => copyToClipboard('address')}
                    aria-label="Copy office address to clipboard"
                  >
                    <div className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ background: '#0F172A' }}>
                      <EnvironmentOutlined className='text-white text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-medium text-gray-400 uppercase tracking-wider'>Our Office</span>
                      <span className='text-base text-gray-700' id="address">1404/99 Bathurst Street, Sydney, NSW 2000</span>
                    </div>
                  </button>
                  <button
                    className='flex flex-row items-start gap-4 cursor-pointer bg-transparent border-none p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 min-h-[44px] text-left'
                    onClick={() => copyToClipboard('email')}
                    aria-label="Copy email address to clipboard"
                  >
                    <div className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ background: '#0F172A' }}>
                      <MailOutlined className='text-white text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-medium text-gray-400 uppercase tracking-wider'>Official Email</span>
                      <span className='text-base text-gray-700' id="email">info@edgeark.com.au</span>
                    </div>
                  </button>
                </div>

                <div className='w-full h-[1px] bg-gray-200 my-2' />

                {/* Form */}
                <div className='w-full flex flex-col gap-4'>
                  <h5 className='text-lg font-semibold text-gray-900'>Leave Us a Message</h5>
                  <Form
                    name="send-message"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    layout="vertical"
                    className="w-full flex flex-col gap-2"
                  >
                    <Form.Item
                      name="title"
                      label="Subject"
                      rules={[{ required: true, message: 'Please input a subject' }]}
                    >
                      <Input placeholder="e.g. General Inquiry" size='large' />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label="Phone (optional)"
                    >
                      <Input placeholder="e.g. +61 400 000 000" size='large' />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: 'Please input your email' },
                        { type: 'email', message: 'Please input a valid email' }
                      ]}
                    >
                      <Input placeholder="e.g. john@example.com" size='large' />
                    </Form.Item>
                    <Form.Item
                      name="content"
                      label="Message"
                      rules={[{ required: true, message: 'Please input your message' }]}
                    >
                      <Input.TextArea
                        autoSize={{ minRows: 6, maxRows: 10 }}
                        maxLength={500}
                        showCount
                        placeholder="Write your message here..."
                        size='large'
                      />
                    </Form.Item>
                    <Form.Item className='w-full flex justify-center'>
                      <Button
                        htmlType="submit"
                        loading={loading}
                        className="transition-all duration-200 ease-in-out
                        cursor-pointer text-base flex justify-center items-center
                        border-none rounded-lg
                        text-white px-10 py-5 font-medium tracking-wide
                        hover:opacity-90"
                        style={{ background: '#0F172A' }}
                      >
                        {loading ? 'SENDING...' : 'SEND MESSAGE'}
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
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
              <button
                className='border border-white/30 rounded-lg button-shadow flex items-center justify-center px-8 py-3 cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-200 min-h-[44px] text-white font-medium tracking-wide bg-transparent'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default BlockWrapper(ContactUs, '')
