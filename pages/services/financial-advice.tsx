import React from 'react'
import Head from 'next/head'
import { Footer } from '@/components'
import { AboutBg } from '@/public'
import { BlockWrapper } from '@/components/Hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import { Divider } from 'antd'

const FinancialAdvice = () => {
  return (
    <>
      <Head>
        <title>FX-QUANT</title>
        <meta name="description" content="EDGE QUANT FINICIAL TRADING" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className='w-full relative'>
        <div className='w-full h-[80vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center'>
            <motion.div
              variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
              className="text-secondary lg:text-[90px] text-[40px] lg:leading-[100px] font-bold"
            >
              <span className='drop-shadow-xl text-white tracking-[1rem] capitalize'>
                Financial advice
              </span>
            </motion.div>
          </div>
        </div>

        <div className='w-full bg-white'>
          <div className='paragraph-container text-black drop-shadow-lg'>
            <h3 className='font-semibold text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>Financial advice</h3>
            <div className='flex flex-col gap-4 text-gray-500 text-base'>
              <p>General financial advice doesn&apos;t take into account your personal situation or goals, or how it might affect you personally.</p>
              <p>Personal financial advice helps to develop a financial plan to reach your financial goals. This covers things like savings, investments, insurance and super and retirement planning.</p>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-300'>
          <div className='paragraph-container text-black drop-shadow-lg'>
            <h3 className='font-semibold text-3xl underline decoration-white decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>General advice</h3>
            <div className='flex flex-col gap-4 text-gray-500'>
              <p className='text-gray-500 text-lg'>General advice is a recommendation or opinion about a financial product that is not tailored to your personal circumstances. This advice won’t consider your personal circumstances, such as your:</p>
              <ul className='list-disc ml-5 flex flex-col gap-2 capitalize text-base'>
                <li>income</li>
                <li>liexpenses</li>
                <li>assets</li>
                <li>liabilities</li>
                <li>goals</li>
                <li>risk tolerance</li>
              </ul>
              <Divider className='bg-white' />
              <p className='text-gray-500 text-lg'>General advice may help you to identify and narrow down your options. But it won’t tell you how to make the best financial decision for your personal situation.</p>
              <Divider className='bg-white' />
              <p className='text-gray-500 text-lg'>General advice is different to factual information. This information can give you useful facts about a financial product. Examples of factual information may include descriptions of:</p>
              <ul className='list-disc ml-5 flex flex-col gap-2 capitalize text-base'>
                <li>the basic features of a superannuation account</li>
                <li>the fees and interest rates on a new term deposit</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-40'></div>
          <div className='paragraph-container text-white drop-shadow-lg'>
            <h3 className='font-semibold text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>Personal advice</h3>
            <div className='flex flex-col gap-4 text-gray-500 capitalize'>
              <p className='capitalize text-lg text-white'>Personal advice is a recommendation or opinion tailored to your personal circumstances. It is more specific than general advice and takes into account your financial situation and goals. Personal advice providers must act in your best interest.</p>
              <Divider className='m-0 bg-white' />
              <p className='text-lg text-white'>Personal advice can include:</p>
              <div className='w-full flex flex-row justify-between gap-4'>
                <div className='pt-4 pb-8 px-4 max-w-[300px] rounded-sm bg-transparent button-shadow text-white'>
                  <h4>Simple, single-issue advice </h4>
                  <p>Help with one financial issue. For example, how much to contribute to your super, or what to do if you inherit shares.</p>
                </div>
                <div className='pt-4 pb-8 px-4 max-w-[300px] rounded-sm bg-transparent button-shadow text-white'>
                  <h4>Comprehensive financial advice</h4>
                  <p>Help to develop a financial plan to reach your financial goals. This covers things like savings, investments, insurance, superannuation and retirement planning.</p>
                </div>
                <div className='pt-4 pb-8 px-4 max-w-[300px] rounded-sm bg-transparent button-shadow text-white'>
                  <h4>Ongoing advice </h4>
                  <p>Regular monitoring and review of your financial plan and personal circumstances.</p>
                </div>
              </div>
              <Divider className='m-0 my-10' />
            </div>
          </div>
        </div>
        {/* <div className='w-full bg-gray-300'>
          <div className='paragraph-container text-gray-500 drop-shadow-lg'>
            <h3 className='text-black font-semibold text-3xl underline decoration-white decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>When general advice might be appropriate</h3>
            <div className='w-full flex flex-row flex-wrap justify-center gap-10'>
              <div className='max-w-[300px] flex flex-col gap-10'>
                <h5 className='text-lg text-gray-600 text-center'>You may want general advice if you:</h5>
                <ul className='list-disc ml-5 flex flex-col gap-2 capitalize text-base'>
                  <li>want to compare or confirm your understanding of different financial products. For example, the difference between a managed fund and an ETF</li>
                  <li>are researching and learning about different financial topics</li>
                  <li>don&apos;t want to spend money on tailored advice</li>
                </ul>
              </div>
              <Divider type='vertical' className='bg-white h-[200px] lg:block hidden' />
              <div className='max-w-[300px] flex flex-col gap-10'>
                <h5 className='text-lg text-gray-600 text-center'>You may be receiving general advice if you:</h5>
                <ul className='list-disc ml-5 flex flex-col gap-2 capitalize text-base'>
                  <li>were not asked questions about your financial situation, needs and objectives</li>
                  <li>are dealing with someone who will not recommend a specific product for you. They will speak generally about it rather than tailoring it to you</li>
                </ul>
              </div>
              <Divider type='vertical' className='bg-white h-[200px] lg:block hidden' />
              <div className='max-w-[300px] flex flex-col gap-10'>
                <h5 className='text-lg text-gray-600 text-center'>When providing general advice, the advice provider must give you a warning. The provider will:</h5>
                <ul className='list-disc ml-5 flex flex-col gap-2 capitalize text-base'>
                  <li>tell you the advice you’re about to receive is general, meaning it doesn’t take into account your own objectives, financial situation or needs</li>
                  <li>prompt you to consider if the advice is appropriate for you before acting on it</li>
                  <li>in some cases, provide you with a Product Disclosure Statement if the advice is about a financial product</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className='w-full bg-white'>
          <div className='paragraph-container text-black drop-shadow-lg'>
            <h3 className='font-semibold text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>When personal advice might be appropriate</h3>
            <div className='flex flex-row text-gray-500 flex-wrap justify-center gap-20'>
              {/* right section */}
              <div className='max-w-[300px]'>
                <ul className='list-disc ml-5 flex flex-col gap-2 capitalize text-base'>
                  <li>Your situation is complex and you need help to work it all out</li>
                  <li>You&apos;re going through a significant life event. For example, buying a house, getting married, transitioning to retirement, redundancy, death of a spouse, or illness.</li>
                  <li>You inherited a large sum of money.</li>
                  <li>You want to outsource your financial affairs.</li>
                </ul>
              </div>
              {/* left section */}
              <div className='max-w-[300px]'>
                <ul className='list-disc ml-5 flex flex-col gap-2 capitalize text-base'>
                  <li>You need specific advice on a topic area and have specific requirements. For example, you want income protection insurance but have health issues.</li>
                  <li>You want to ensure you&apos;re on track to meet your financial goals.</li>
                  <li>You need help managing someone else&apos;s money. For example, you’re appointed Power of Attorney for someone, or you’re an executor for a deceased estate.</li>
                </ul>
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

export default FinancialAdvice