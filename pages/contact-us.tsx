import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Footer } from '@/components'
import { AboutBg } from '@/public'
import { BlockWrapper } from '@/components/Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { Divider, message } from 'antd'
import { FormOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/Map'), { ssr: false })
import { Input, Form, Button } from 'antd'
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';
import VerifyComponent from '@/components/VerifyComponent'

const ContactUs = () => {
  const copyToClipboard = (elementId: string) => {
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
  const [title, setTitle] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [content, setContent] = useState<string>()

  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values)
    message.success('Message sent successfully')
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('Please fill all the fields')
  }
  const handleVerify = (token: string) => {
    console.log(token)
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
        <div className='w-full h-[50vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
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
            <div className='w-full flex flex-row flex-wrap justify-center gap-10'>
              {/* map */}
              <Map />
              <div className='w-[600px] flex flex-col gap-5'>
                <div className='flex flex-col gap-2 items-center cursor-pointer'>
                  <div className='flex items-center gap-3 text-lg font-bold'><EnvironmentOutlined />Our Office</div>
                  <div className='text-base' id="address" onClick={() => copyToClipboard('address')}>201 Elizabeth Street Sydney 2000</div>
                </div>
                <div className='flex flex-col gap-2 items-center cursor-pointer'>
                  <div className='flex items-center gap-3 text-lg font-bold'><MailOutlined />Official Email</div>
                  <div className='text-base' id="email" onClick={() => copyToClipboard('email')}>info@edgequant.com.au</div>
                </div>
                <Divider className='m-0 my-4' />
                {/* Form section */}
                <div className='w-full flex flex-col items-center'>
                  <h5 className='text-lg capitalize font-bold flex items-center gap-3'><FormOutlined />Leave us a message</h5>
                  <div className='w-full px-4 py-4'>
                    <Form
                      name="send-message"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      form={form}
                      className="lg:min-w-[500px] flex flex-col gap-4 min-w-[350px]"
                    >
                      <Form.Item
                        name="title"
                        rules={[{ required: true, message: 'Please input your title!' }]}
                      >
                        <Input
                          placeholder="Title"
                          size='large'
                          onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }
                          }
                          value={title}
                        />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        rules={[
                          { required: true, message: 'Please input your title!' },
                          {
                            validator(rule, value, callback) {
                              if (value) {
                                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                                if (emailRegex.test(value)) {
                                  callback();
                                } else {
                                  callback('Please input a valid email format!');
                                }
                              } else {
                                callback();
                              }
                            }
                          }
                        ]}
                      >
                        <Input
                          placeholder="Email"
                          size='large'
                          onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
                          }
                          value={email}
                        />
                      </Form.Item>
                      <Form.Item
                        name="content"
                        rules={[{ required: true, message: 'Please input your message!' }]}
                      >
                        <Input.TextArea
                          autoSize={{ minRows: 6, maxRows: 10 }}
                          maxLength={500}
                          placeholder="Write your message here"
                          size='large'
                          onChange={
                            (e) => { setContent(e.target.value) }
                          }
                          value={content}
                        />
                      </Form.Item>
                      {/* <GoogleReCaptchaProvider reCaptchaKey="6LdbUxYmAAAAALYH2KK7QiX4Skn0dtaRTF7c0GMZ">
                        <GoogleReCaptcha onVerify={handleVerify} />
                      </GoogleReCaptchaProvider> */}
                      <Form.Item className='w-full flex justify-between flex-col items-center'>
                        <Button
                          htmlType="submit"
                          className="transition duration-300 ease-in-out 
                          cursor-pointer text-lg flex justify-center items-center
                          border-white border-[1px]
                          bg-blue-400 text-white hover:bg-white px-10 py-5
                          "
                        >
                          SEND
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                  
                  <GoogleReCaptchaProvider reCaptchaKey="YOUR_RECAPTCHA_SITE_KEY">
      <div>
        <h1>Send a Message</h1>
        <VerifyComponent />
      </div>
    </GoogleReCaptchaProvider>
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

export default BlockWrapper(ContactUs, '')