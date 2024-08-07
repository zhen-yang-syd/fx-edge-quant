import { useState, useEffect } from 'react'
import Head from 'next/head'
import { HomeBg, HomeValue } from '@/public'
import { HomeBanner, Footer } from '@/components'
import { useRouter } from 'next/router'
import { Divider, Collapse, Modal } from 'antd'
import { FundTwoTone, DollarTwoTone, CrownTwoTone } from '@ant-design/icons'
import { paragrahStyle } from '@/styles'

const { Panel } = Collapse;
export default function Home() {
	const router = useRouter()
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	useEffect(() => {
		const hasVisitedBefore = localStorage.getItem('hasVisited');
		if (!hasVisitedBefore) {
			// If the user has not visited before, show the modal
			setIsModalOpen(true);
			localStorage.setItem('hasVisited', 'true');
		}
	}, []);

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
          className="w-full h-[100vh] relative"
          style={{
            backgroundImage: `url(${HomeBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center">
            <HomeBanner />
          </div>
        </div>
        <div className="w-full paragraph-container" id="introduction">
          <h2 className="text-3xl font-normal flex flex-col gap-2 justify-center w-full items-center">
            <span className="text-gray-300 font-semibold text-2xl">
              Midas Markets Investment Manager Ltd{" "}
            </span>
            <span className="underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-justify">
              Trading and Financial Services
            </span>
          </h2>
          <p className="text-lg font-light flex flex-row flex-wrap justify-center lg:gap-12 sm:gap-10 gap-0">
            <span
              className={`w-[350px] mb-5 drop-shadow-lg shadow-lg pt-4 pb-10 px-8 text-[#111111] bg-gray-200 flex flex-col items-start justify-start gap-4 leading-[23px] ${paragrahStyle}`}
            >
              <span className="text-black font-semibold">{`Broaden your potential`}</span>
              <span>
                {`Our scale and breadth of investment expertise allow us to combine a range of specialist and mainstream asset classes. This expands your clients sources of potential return. And by also carefully assessing future risks, our multi-asset strategies aim to give your clients a smoother long-term investment performance.`}
              </span>
            </span>
            <span
              className={`w-[350px] mb-5 drop-shadow-lg shadow-lg pt-4 pb-10 px-8 text-[#111111] bg-gray-200 flex flex-col items-start justify-start gap-4 leading-[23px] ${paragrahStyle}`}
            >
              <span className="text-black font-semibold">{`Target your outcome`}</span>
              <span>
                {`Many of our multi-asset strategies are designed to target specific goals and risk-reward requirements – from tactical asset allocation to diversified income/growth to absolute ‘cash-plus’ return strategies. Strategies can be further customised to meet your clients needs.`}
              </span>
            </span>
            <span
              className={`w-[350px] mb-5 drop-shadow-lg shadow-lg pt-4 pb-10 px-8 text-[#111111] bg-gray-200 flex flex-col items-start justify-start gap-4 leading-[23px] ${paragrahStyle}`}
            >
              <span className="text-black font-semibold">{`Focus on sustainability`}</span>
              <span>
                {`We want our multi-asset strategies to contribute to the long-term health of society and our planet. So we assess environmental, social and governance (ESG) factors when we invest and take climate into account in our strategic asset allocation. You can also choose from specialist sustainable strategies.`}
              </span>
            </span>
          </p>
        </div>
        <div className="w-full bg-[#373737]">
          <div className="paragraph-container text-white">
            <h3 className="font-normal text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center">
              OUR FOCUS
            </h3>
            <div className="px-4" id="mission">
              <h4 className="font-normal text-xl">MISSION</h4>
              <Divider className="bg-white m-0 my-4" />
              <p className={`${paragrahStyle} text-normal font-light`}>
                {`We invest to help create more for our clients. We offer investment expertise across key asset classes, regions and markets so that our clients can capture investment potential. By combining market and economic insight with technology and diverse perspectives, we look for optimal ways to help our clients navigate the future and reach their objectives. And by integrating environmental, social and governance (ESG) considerations through our process, we seek to find the most sustainable investment opportunities globally helping build our conviction and underpin client solutions. By ensuring the assets we invest in are ready for and resilient to a world in transition, we act as guardians of our clients’ assets and where possible we align the interests of our clients and wider society with a more sustainable future for our planet.`}
              </p>
            </div>
            <div className="px-4" id="vision">
              <h4 className="font-normal text-xl">VISION</h4>
              <Divider className="bg-white m-0 my-4" />
              <p className={`${paragrahStyle} text-normal font-light`}>
                To be the chosen one-stop platform for investment education and
                investment services in Australia with a reputation for
                personalized service based on knowledge and experience and in
                partnership with our esteemed clients to achieve superior
                performance, results, and long-term profitability.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full relative"
          style={{
            backgroundImage: `url(${HomeValue.src})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 z-30"></div>
          <div className="paragraph-container text-white">
            <h3 className="font-normal text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center z-50">
              VALUE
            </h3>
            <div className="w-[70%] mx-auto z-50">
              <Collapse
                defaultActiveKey={["1"]}
                ghost
                accordion
                className="text-white w-full z-50"
              >
                <Panel header="Professional" key="1">
                  <Divider className="bg-white m-0 mb-5" />
                  <p className={`leading-[30px] text-white ${paragrahStyle}`}>
                    Excellence in our relationships with investors and financial
                    management brings superior service and long-term returns on
                    investments. We generate higher returns through high-quality
                    services tailored to investors’ needs, by raising awareness
                    about the importance of individually-tailored financial
                    investments to meet long-term goals, and through amiable,
                    personalised communications.
                  </p>
                </Panel>
                <Panel header="Sustainable" key="2">
                  <Divider className="bg-white m-0 mb-5" />
                  <p className={`leading-[30px] text-white ${paragrahStyle}`}>
                    Midas Markets Investment Manager Ltd’s approach to
                    sustainable investing is rooted in our fiduciary duty to
                    clients. We start by understanding our clients’ investment
                    objectives and provide choice to meet their needs; we seek
                    the best risk-adjusted returns within the scope of mandates
                    they give us; and we underpin our work with research, data,
                    and analytics.
                  </p>
                </Panel>
                <Panel header="Consistent" key="3">
                  <Divider className="bg-white m-0 mb-5" />
                  <p className={`leading-[30px] text-white ${paragrahStyle}`}>
                    As an independent, fiduciary asset manager, Midas Markets
                    Investment Manager Ltd is committed to acting at all times
                    in the best long-term interests of our fund investors.
                  </p>
                </Panel>
                <Panel header="Diverse" key="4">
                  <Divider className="bg-white m-0 mb-5" />
                  <p className={`leading-[30px] text-white ${paragrahStyle}`}>
                    {`Midas Markets Investment Manager Ltd manages a diverse range of financial products, including Bonds, Real Estate Funds, Equities, ETFs, FOFs and Derivatives.`}
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
        <Footer />
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
          width={1000}
          closable={false}
          footer={null}
        >
          <div className="w-full">
            <h5 className="text-lg font-semibold text-center mb-4 drop-shadow-lg">
              Disclaimer
            </h5>
            <div className="w-full h-[300px] overflow-scroll flex flex-col gap-2">
              {/* <p className="text-base text-gray-400 drop-shadow-lg">
                Midas Markets Investment Manager Ltd (ACN 664 994 503) is a CAR:
                a Corporate Authorised Representative of Alpha Securities Pty
                Ltd (ACN 124 327 064), which is licensed to deal in a broad
                range of financial products. Alpha Securities holds an
                Australian Financial Services License (AFSL 330757), which has
                being issued to it by the Australian Securities & Investments
                Commission (ASIC). Alpha Securities provides general securities
                advice only and does not take into account particular investment
                objectives, financial situation and needs of any particular
                person. You should carefully assess whether such information is
                appropriate in light of your individual circumstances before
                acting on it.
              </p> */}
              <p className="text-base text-gray-400 drop-shadow-lg text-justify">{`Midas Markets Investment Manager Ltd provides asset management and trust service. Any other particular investment objectives, financial situation and needs of any particular person should carefully assess whether such information is appropriate in light of your individual circumstances before acting on it. `}</p>
              <p className="text-base text-gray-400 drop-shadow-lg text-justify">{`While all of the information and statements contained on this website  have been prepared with all reasonable care, no responsibility or liability is accepted by Midas Markets Investment Manager Ltd  or any of its directors, officers, employees or contractors for any errors or omissions or misstatements however caused or arising.`}</p>
              <p className="text-base text-gray-400 drop-shadow-lg text-justify">
                {`The material on this website contains factual information only
                and is not intended to reflect any recommendations or financial
                advice, or is it an offer or solicitation in relation to any
                particular financial product. To the extent this document does
                contain any general advice, it has been prepared without taking
                into account your objectives, financial situation or needs, and
                because of this, you should, before acting on it, consider the
                appropriateness of the advice, having regard to your objectives,
                financial situation, and needs, and if the advice relates to the
                acquisition of a particular financial product for which an offer
                document (such as a prospectus or product disclosure document)
                is available, you should obtain the offer document relating to
                the particular product and consider it before making any
                decision whether to acquire the product.`}
              </p>
              <p className="text-base text-gray-400 drop-shadow-lg text-justify">
                This website provides general information, details Offers
                available via Midas Markets Investment Manager Ltd and allows
                Members to participate in these Offers. We do not provide
                investment advice, and information on our website does not take
                into account your personal and financial circumstances, needs
                and objectives. Because of that, you should consider the
                appropriateness of the information with regards to your personal
                circumstances, needs and objectives before making an investment
                decision.
              </p>
              <p className="text-base text-gray-400 drop-shadow-lg text-justify">
                Before entering into any transaction, you should ensure that you
                fully understand the terms of the transaction, relevant risk
                factors, the nature and extent of your risk of loss, as well as
                the legal, tax, and accounting consequences of the transaction.
                You should also carefully evaluate whether the transaction is
                appropriate for you in light of your experience, objectives,
                financial resources, and other relevant circumstances and
                whether you have the operational resources in place to monitor
                the associated risks and obligations over the term of the
                transaction. We recommend that you obtain financial as well as
                tax advice based on your own individual circumstances before
                making an investment decision.
              </p>
              <p className="text-base text-gray-400 drop-shadow-lg text-justify">
                Information contained in the material is based on data from
                multiple sources and Midas Markets Investment Manager Ltd makes
                no representation as to the accuracy or completeness of data
                from sources outside of Midas Markets Investment Manager Ltd .
                References to third parties contained herein should not be
                considered a solicitation on behalf of or an endorsement of
                those entities by Midas Markets Investment Manager Ltd . The
                opinions expressed by the author of an article written by a
                third party are solely his/her own and do not necessarily
                reflect those of Midas Markets Investment Manager Ltd . The
                information and data provided by any third-party web site or
                publication are as of the date of the article when it was
                written and is subject to change without notice.
              </p>
            </div>
            <div className="w-full flex flex-row justify-center mt-10 mb-5">
              <button
                className="text-blue-300 border-[1px] border-blue-300 hover:bg-blue-300 hover:border-white hover:text-white
							px-10 py-2 rounded-md transition duration-150 ease-in-out
							"
                onClick={handleOk}
              >
                Accept
              </button>
            </div>
          </div>
        </Modal>
      </main>
    </>
  );
}
