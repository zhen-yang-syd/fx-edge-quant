import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components'
import { AboutBg } from '@/public'
import { BlockWrapper } from '@/components/Hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import { Logo } from '@/public'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const BenifitCard = ({ benifit }: { benifit: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'gray',
        color: "white",
        padding: "0",
      }}
      contentArrowStyle={{ borderRight: "7px solid white", opacity: "0.2" }}
      iconStyle={{ background: benifit.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={benifit.icon}
            alt={benifit.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div className="w-full h-full bg-gray-500 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl px-6 pt-4 pb-6 rounded-lg">
        <div>
          <h3 className='text-white text-lg font-bold'>{benifit.title}</h3>
        </div>
        <ul className='mt-2 list-disc ml-5 space-y-2'>
          {benifit.points.map((point: any, index: number) => (
            <li
              key={`benifit-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const MdaServices = () => {
  const router = useRouter()
  const benifits = [
    {
      title: "Fewer decisions",
      icon: Logo.src,
      iconBg: "gray",
      points: [
        " the MDA provider makes day-to-day investment decisions on your behalf. This means fewer decisions for you to make and less paperwork to review."
      ],
    },
    {
      title: "Transparency",
      icon: Logo.src,
      iconBg: "gray",
      points: [
        " MDA platforms let you view all the assets you own in the account. You can see fees and charges, and how your investments are performing. Look for an MDA with this feature."
      ],
    },
    {
      title: "Ease in transacting",
      icon: Logo.src,
      iconBg: "gray",
      points: [
        " the MDA provider can buy or sell assets to respond quickly to market changes."
      ],
    },
    {
      title: "Access to professional managers",
      icon: Logo.src,
      iconBg: "gray",
      points: [
        " some MDA providers use professional investment managers to trade on your behalf."
      ],
    },
  ];
  return (
    <>
      <Head>
				<title>EDGE QUANT FUND MANAGEMENT</title>
				<meta name="description" content="EDGE QUANT FINICIAL TRADING" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/edge-icon.svg" />
			</Head>
      <main className='w-full relative'>
        <div className='w-full h-[80vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center'>
            <motion.div
              variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
              className="text-secondary lg:text-[90px] text-[40px] lg:leading-[100px] font-bold"
            >
              <span className='drop-shadow-xl text-white tracking-[1rem] capitalize'>
                M.D.A Services
              </span>
            </motion.div>
          </div>
        </div>
        <div className='w-full bg-white'>
          <div className='paragraph-container text-black drop-shadow-lg'>
            <h3 className='font-semibold text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>MDA (Managed discretionary account) Service</h3>
            <div className='flex flex-col gap-4 text-gray-500'>
              <p>A personal investment account where you own investment assets, such as company shares or units in a managed fund. You give someone else (the MDA provider) the authority to buy and sell investments on your behalf. Financial advisers often use MDAs to manage portfolios for their clients.</p>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-300'>
          <div className='paragraph-container text-black drop-shadow-lg'>
            <h3 className='font-semibold text-3xl underline decoration-white decoration-[1px] decoration-offline underline-offset-[20px] capitalize'>How an MDA works</h3>
            <div className='flex flex-col gap-4 text-gray-500'>
              <ul className='list-disc flex flex-col gap-2'>
                <li>You sign an agreement (MDA contract) with the MDA provider. This gives the provider the discretion to buy or sell investments without having to check with you.</li>
                <li>You and the provider agree on an investment program, and they must make investment decisions in line with this.</li>
                <li>The investment program sets out what the MDA provider can invest in, and what trading strategies to use. This reflects the investment strategy in the Statement of Advice</li>
                <li>(SOA) given to you by your financial adviser. Your financial adviser may also be your MDA provider.</li>
                <li>The provider must review the investment program at least every 13 months. This is to make sure it continues to be suitable for you.</li>
                <li>An MDA may be hosted on an online investment platform. The MDA provider uses the platform to buy and sell assets on your behalf. It also has tax and reporting services.</li>
                <li>You can log in at any time to see how your investments are performing.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full bg-white'>
          <div className='paragraph-container text-black drop-shadow-lg justify-end items-center'>
            <h3 className='font-semibold text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] capitalize'>Benefits of an MDA</h3>
            <div className='flex flex-col gap-4 text-gray-500'>
              MDAs can be useful for investors who don&apos;t have the time or expertise to manage their own investments.
            </div>
          </div>
        </div>
        <section className='min-w-[100vw] min-h-[100vh] lg:px-0 px-5 bg-gray-300'>
          <div className="py-10 w-full">
            <motion.div variants={textVariant()}>
              <p className={`text-center text-white font-semibold text-3xl underline decoration-white decoration-[1px] decoration-offline underline-offset-[20px] capitalize`}>
                Benefits of an MDA include:
              </p>
            </motion.div>
            <div className='mt-20 flex flex-col'>
              <VerticalTimeline>
                {benifits.map((benifit, index) => (
                  <BenifitCard
                    key={`benifit-${index}`}
                    benifit={benifit}
                  />
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </section>
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

export default BlockWrapper(MdaServices, 'mda-services')