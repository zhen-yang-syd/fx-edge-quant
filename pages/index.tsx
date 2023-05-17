import Head from 'next/head'
import { HomeBg, HomeValue } from '@/public'
import { HomeBanner, Footer } from '@/components'
import { useRouter } from 'next/router'
import { Divider, Collapse } from 'antd'
import { FundTwoTone, DollarTwoTone, CrownTwoTone } from '@ant-design/icons'

const { Panel } = Collapse;
export default function Home() {
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
				<div className='w-full h-[100vh] relative' style={{ backgroundImage: `url(${HomeBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
					<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center'>
						<HomeBanner />
					</div>
				</div>
				<div className='w-full paragraph-container' id='introduction'>
					<h2 className='text-3xl font-normal flex flex-col gap-2 justify-center w-full items-center'>
						<span className='text-gray-300 font-semibold text-2xl'>EDGE ARK PTY LTD</span>
						<span className='underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px]'>Trading and Financial Services</span>
					</h2>
					<p className='text-lg font-light grid grid-flow-col col-span-3 gap-10'>
						<span className='drop-shadow-lg shadow-lg pt-4 pb-10 px-8 text-[#111111] bg-gray-200 flex flex-col items-center justify-start gap-4 text-sm leading-[23px]'>
							<FundTwoTone className='text-5xl' />
							EDGE is an exciting boutique Financial Services Securities firm with strategic alliances across all facets of the financial markets providing clients with a unique offering to suit their own requirements, whether online traders, wealth creators or one off trades.</span>
						<span className='drop-shadow-lg shadow-lg pt-4 pb-10 px-8 text-[#111111] bg-gray-200 flex flex-col items-center justify-start gap-4 text-sm leading-[23px]'>
							<DollarTwoTone className='text-5xl' twoToneColor="#eb2f96" />
							EDGE is complimented with a team of young and old to provide the best personal customer service to all clients and their financial needs. With a long and distinguished presence in the global Market, we bring a depth of knowledge and expertise across a variety of financial areas.</span>
						<span className='drop-shadow-lg shadow-lg pt-4 pb-10 px-8 text-[#111111] bg-gray-200 flex flex-col items-center justify-start gap-4 text-sm leading-[23px]'>
							<CrownTwoTone className='text-5xl' twoToneColor="#52c41a" />
							EDGE’s strengths are working with our clients to deliver the best possible service and create financial stability.</span>
					</p>
				</div>
				<div className='w-full bg-[#373737]'>
					<div className='paragraph-container text-white'>
						<h3 className='font-normal text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center'>OUR FOCUS</h3>
						<div className='' id="mission">
							<h4 className='font-normal text-xl'>MISSION</h4>
							<Divider className='bg-white m-0 my-4' />
							<p className='text-normal font-light'>
								We are committed to the highest standards of professionalism and integrity. This is demonstrated through our ongoing professional development of our team by understanding our clients, their businesses and their interests.
							</p>
						</div>
						<div className='' id='vision'>
							<h4 className='font-normal text-xl'>VISION</h4>
							<Divider className='bg-white m-0 my-4' />
							<p className='text-normal font-light'>
								To be the chosen one-stop platform for investment education and investment services in Australia with a reputation for personalized service based on knowledge and experience and in partnership with our esteemed clients to achieve superior performance, results, and long-term profitability.
							</p>
						</div>
					</div>
				</div>
				<div className='w-full relative' style={{ backgroundImage: `url(${HomeValue.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
					<div className='w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 z-30'></div>
					<div className='paragraph-container text-white'>
						<h3 className='font-normal text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center z-50'>VALUE</h3>
						<div className='w-[1000px] m-auto z-50'>
							<Collapse defaultActiveKey={['1']} ghost accordion className='text-white w-full z-50'>
								<Panel header="Professional" key="1">
									<Divider className='bg-white m-0 mb-5' />
									<p className='text-sm leading-[30px] text-white'>Excellence in our relationships with investors and financial management brings superior service and long-term returns on investments. We generate higher returns through high-quality services tailored to investors’ needs, by raising awareness about the importance of individually-tailored financial investments to meet long-term goals, and through amiable, personalised communications.</p>
								</Panel>
								<Panel header="Sustainable" key="2">
									<Divider className='bg-white m-0 mb-5' />
									<p className='text-sm leading-[30px] text-white'>EDGE’s approach to sustainable investing is rooted in our fiduciary duty to clients. We start by understanding our clients’ investment objectives and provide choice to meet their needs; we seek the best risk-adjusted returns within the scope of mandates they give us; and we underpin our work with research, data, and analytics.</p>
								</Panel>
								<Panel header="Consistent" key="3">
									<Divider className='bg-white m-0 mb-5' />
									<p className='text-sm leading-[30px] text-white'>As an independent, fiduciary asset manager, EDGE is committed to acting at all times in the best long-term interests of our fund investors.</p>
								</Panel>
								<Panel header="Diverse" key="4">
									<Divider className='bg-white m-0 mb-5' />
									<p className='text-sm leading-[30px] text-white'>EDGE offers a diverse range of financial products, including Equities, ETFs, Derivatives, CFDs, and International Trading.</p>
								</Panel>
							</Collapse>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	)
}
