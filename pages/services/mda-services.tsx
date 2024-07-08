import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "@/components";
import { AboutBg } from "@/public";
import { BlockWrapper } from "@/components/Hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { Logo } from "@/public";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { paragrahStyle } from "@/styles";

const BenifitCard = ({ benifit }: { benifit: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "gray",
        color: "white",
        padding: "0",
      }}
      contentArrowStyle={{ borderRight: "7px solid white", opacity: "0.2" }}
      iconStyle={{ background: benifit.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={benifit.icon}
            alt={benifit.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="w-full h-full bg-gray-500 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl px-6 pt-4 pb-6 rounded-lg">
        <div>
          <h3 className="text-white text-lg font-bold">{benifit.title}</h3>
        </div>
        <ul className="mt-2 list-disc ml-5 space-y-2">
          {benifit.points.map((point: any, index: number) => (
            <li
              key={`benifit-point-${index}`}
              className={`text-white-100 text-[14px] pl-1 tracking-wider ${paragrahStyle}`}
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
  const router = useRouter();
  const benifits = [
    {
      title: "Advanced approach to asset allocation",
      icon: Logo.src,
      iconBg: "gray",
      points: [
        `We believe diversification is critical to reaching long-term financial goals while minimizing unwanted risk. Our proprietary investing approach allocates risk, not capital, across sources of return to build portfolios that are appropriately balanced to seek to achieve long term client objectives. Specialist expertise. We leverage the skill and experience of dedicated multi-asset class specialists to build portfolios and dedicate significant resources to researching and developing innovative investment strategies. We also access the insights and global reach of experienced investment professionals across GSAM.`,
      ],
    },
    {
      title: "Tactical investing capabilities",
      icon: Logo.src,
      iconBg: "gray",
      points: [
        `We integrate macro views and incorporate tactical investing programs– developed by our team of economists and market specialists – in portfolios, helping clients capitalize on the changing economic cycle and market dislocations.`,
      ],
    },
    {
      title: " Robust risk management",
      icon: Logo.src,
      iconBg: "gray",
      points: [
        `We use Goldman Sachs’ proprietary, fully-integrated risk management system, which includes sophisticated analytics and monitoring tools which enable us to effectively manage portfolio and market risk. `,
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>
          Midas Markets Investment Manager Ltd QUANT FUND MANAGEMENT
        </title>
        <meta
          name="description"
          content="Midas Markets Investment Manager Ltd QUANT FINICIAL TRADING"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full relative">
        <div
          className="w-full h-[80vh] relative"
          style={{
            backgroundImage: `url(${AboutBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center">
            <motion.div
              variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
              className="text-secondary lg:text-[90px] text-[40px] lg:leading-[100px] font-bold"
            >
              <span className="drop-shadow-xl text-white tracking-[1rem] capitalize">
                Multi-Asset Funds
              </span>
            </motion.div>
          </div>
        </div>
        <div className="w-full bg-white">
          <div className="paragraph-container text-black drop-shadow-lg">
            <h3 className="font-semibold text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize sm:leading-none leading-[55px]">{`Multi-Asset Funds`}</h3>
            <div
              className={`${paragrahStyle} flex flex-col gap-4 text-gray-500 px-4`}
            >
              <p>{`Midas Markets' Multi-Asset Fund Solutions team designs and manages a suite of mutual funds and model portfolios that invest across asset classes, geographies and styles to seek to achieve their respective investment objectives.`}</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-300">
          <div className="paragraph-container text-black drop-shadow-lg">
            <h3 className="font-semibold text-3xl underline decoration-white decoration-[1px] decoration-offline underline-offset-[20px] capitalize px-10">{`Why choose us`}</h3>
            <div className="flex flex-col gap-4 text-gray-500 px-10">
              <ul className={`${paragrahStyle} list-disc flex flex-col gap-2`}>
                <li>{`We seek to understand investors' needs to provide them multi-asset solutions that meet their objectives and deliver strong risk-adjusted returns.`}</li>
                <li>{`We design custom portfolios that deliver our asset allocation expertise and market insights to individual investors. Our portfolios also offer access to GSAM investment teams' high conviction views and active strategies across asset classes and investing styles.`}</li>
                <li>{`We employ a fully-integrated risk management system to monitor and manage the portfolio on a daily basis and adjust exposures based on evolving market dynamics.`}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-white">
          <div className="paragraph-container text-black drop-shadow-lg justify-end items-center">
            <h3 className="font-semibold text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] capitalize">
              Benefits
            </h3>
          </div>
        </div>
        <section className="min-w-[100vw] min-h-[100vh] lg:px-0 px-5 bg-gray-300">
          <div className="py-10 w-full">
            <motion.div variants={textVariant()}>
              <p
                className={`text-center text-white font-semibold text-3xl underline decoration-white decoration-[1px] decoration-offline underline-offset-[20px] capitalize sm:leading-none leading-[55px]`}
              >
                {/* {`Advanced approach to asset allocation`} */}
              </p>
            </motion.div>
            <div className="mt-20 flex flex-col">
              <VerticalTimeline>
                {benifits.map((benifit, index) => (
                  <BenifitCard key={`benifit-${index}`} benifit={benifit} />
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </section>
        <div
          className="w-full relative cursor-default text-white"
          style={{
            backgroundImage: `url(${AboutBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="footer-container">
            <div className="w-full flex flex-row justify-center gap-10">
              <span className="capitalize sm:text-3xl text-sm flex items-center">
                get your free initial consultation
              </span>
              <button className="border-[1px] border-white rounded-sm button-shadow flex items-center justify-center px-4 py-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default BlockWrapper(MdaServices, "mda-services");
