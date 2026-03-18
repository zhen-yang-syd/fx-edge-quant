import { useState, useEffect } from 'react'
import Head from 'next/head'
import { HomeBg, HomeValue } from '@/public'
import { HomeBanner, Footer } from '@/components'
import { Collapse } from 'antd'
import { paragrahStyle } from '@/styles'

const { Panel } = Collapse;
export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [heroLoaded, setHeroLoaded] = useState(false);

	useEffect(() => {
		const hasSeenNotice = sessionStorage.getItem('hasSeenNotice');
		if (!hasSeenNotice) {
			setIsModalOpen(true);
			sessionStorage.setItem('hasSeenNotice', 'true');
		}
	}, []);

	useEffect(() => {
		const t = setTimeout(() => setHeroLoaded(true), 100);
		return () => clearTimeout(t);
	}, []);

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
				<section className='w-full h-screen relative overflow-hidden'>
					<div
						className='absolute inset-0 will-change-transform'
						style={{
							backgroundImage: `url(${HomeBg.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							transform: heroLoaded ? 'scale(1)' : 'scale(1.18)',
							transition: 'transform 16s cubic-bezier(0.16, 1, 0.3, 1)',
						}}
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex justify-center items-center text-white text-center'>
						<HomeBanner />
					</div>
				</section>

				{/* ===== INTRODUCTION CARDS ===== */}
				<section className='w-full bg-white' id='introduction'>
					<div className='paragraph-container'>
						<div className='flex flex-col gap-3 items-center text-center'>
							<span className='text-sm font-medium tracking-[0.2em] uppercase text-gray-400'>EDGE ARK PTY LTD</span>
							<h2 className='text-3xl sm:text-4xl font-semibold text-gray-900'>
								Trading and Financial Services
							</h2>
							<div className='w-16 h-[2px] bg-gray-300 mt-2' />
						</div>
						<div className='flex flex-row flex-wrap justify-center lg:gap-10 gap-6'>
							{[
								{
									title: 'Strategic Alliances',
									text: 'EDGE is an exciting boutique Financial Services Firm with strategic alliances across all facets of the financial markets providing clients with a unique offering of financial education and information.',
									accent: '#0F172A',
								},
								{
									title: 'Expert Team',
									text: 'EDGE employs a team of new and seasoned financial professionals to provide the best personal customer service to all clients and their financial needs. With a long and distinguished presence in the global Market, we bring a depth of knowledge and expertise across a variety of financial areas.',
									accent: '#1E293B',
								},
								{
									title: 'Financial Stability',
									text: "EDGE's strengths are working with our clients to deliver the best possible service and create financial stability.",
									accent: '#334155',
								},
							].map((card, i) => (
								<div key={i}
									className='w-full max-w-[340px] rounded-xl p-6 pb-8
									bg-white border border-gray-100
									flex flex-col gap-4
									transition-all duration-200 ease-in-out
									hover:shadow-lg hover:-translate-y-0.5'
									style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)' }}
								>
									<div className='w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold'
										style={{ background: card.accent }}>
										{String(i + 1).padStart(2, '0')}
									</div>
									<h3 className='text-lg font-semibold text-gray-900'>{card.title}</h3>
									<p className={`${paragrahStyle} text-gray-500 text-sm`}>{card.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ===== OUR FOCUS ===== */}
				<section className='w-full' style={{ background: '#0F172A' }}>
					<div className='paragraph-container text-white'>
						<div className='flex flex-col gap-3 items-center text-center'>
							<span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>What drives us</span>
							<h3 className='text-3xl sm:text-4xl font-semibold'>Our Focus</h3>
							<div className='w-16 h-[2px] bg-white/20 mt-2' />
						</div>
						<div className='flex flex-col gap-10 max-w-3xl mx-auto'>
							<div id="mission">
								<h4 className='font-medium text-lg text-white/90 tracking-wide mb-3'>MISSION</h4>
								<div className='w-full h-[1px] bg-white/10 mb-4' />
								<p className={`${paragrahStyle} text-white/60 font-light`}>
									We are committed to the highest standards of professionalism and integrity. This is demonstrated through our ongoing professional development of our team by understanding our clients, their businesses and their interests.
								</p>
							</div>
							<div id='vision'>
								<h4 className='font-medium text-lg text-white/90 tracking-wide mb-3'>VISION</h4>
								<div className='w-full h-[1px] bg-white/10 mb-4' />
								<p className={`${paragrahStyle} text-white/60 font-light`}>
									To be the chosen one-stop platform for investment education and information services in Australia with a reputation for excellent service based on knowledge and experience and in partnership with our esteemed clients to achieve superior performance, results, and long-term profitability.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* ===== VALUE ===== */}
				<section className='w-full relative' style={{ backgroundImage: `url(${HomeValue.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
					<div className='absolute inset-0 bg-black/50' />
					<div className='paragraph-container text-white relative'>
						<div className='flex flex-col gap-3 items-center text-center'>
							<span className='text-sm font-medium tracking-[0.2em] uppercase text-white/40'>Our principles</span>
							<h3 className='text-3xl sm:text-4xl font-semibold'>Value</h3>
							<div className='w-16 h-[2px] bg-white/20 mt-2' />
						</div>
						<div className='w-full lg:w-[75%] mx-auto'>
							<Collapse defaultActiveKey={['1']} ghost accordion className='text-white w-full'>
								<Panel header="Professional" key="1">
									<div className='w-full h-[1px] bg-white/10 mb-4' />
									<p className={`leading-relaxed text-white/70 ${paragrahStyle}`}>Excellence in our relationships with investors and financial management brings superior service and long-term returns on investments. We generate higher returns through high-quality services tailored to investors&apos; needs, by raising awareness about the importance of individually-tailored financial investments to meet long-term goals, and through amiable, personalised communications.</p>
								</Panel>
								<Panel header="Sustainable" key="2">
									<div className='w-full h-[1px] bg-white/10 mb-4' />
									<p className={`leading-relaxed text-white/70 ${paragrahStyle}`}>EDGE&apos;s approach to sustainable investing is rooted in our fiduciary duty to clients. We start by understanding our clients&apos; investment objectives and provide choice to meet their needs; we seek the best risk-adjusted returns within the scope of mandates they give us; and we underpin our work with research, data, and analytics.</p>
								</Panel>
								<Panel header="Consistent" key="3">
									<div className='w-full h-[1px] bg-white/10 mb-4' />
									<p className={`leading-relaxed text-white/70 ${paragrahStyle}`}>As an independent, fiduciary asset manager, EDGE is committed to acting at all times in the best long-term interests of our fund investors.</p>
								</Panel>
								<Panel header="Diverse" key="4">
									<div className='w-full h-[1px] bg-white/10 mb-4' />
									<p className={`leading-relaxed text-white/70 ${paragrahStyle}`}>EDGE offers a diverse range of financial products, including Equities, ETFs, Derivatives, CFDs, and International Trading.</p>
								</Panel>
							</Collapse>
						</div>
					</div>
				</section>

				<Footer />

				{/* ===== NOTICE MODAL ===== */}
				{isModalOpen && (
					<div className='fixed inset-0 z-[200] flex items-center justify-center px-5'
						style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)' }}>
						<div className='w-full max-w-[440px] bg-white rounded-2xl overflow-hidden'
							style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)' }}>

							{/* Top accent bar */}
							<div className='w-full h-1' style={{ background: '#0F172A' }} />

							<div className='px-8 pt-8 pb-7 flex flex-col items-center text-center'>
								{/* Eyebrow */}
								<div className='flex items-center gap-2.5 mb-3'>
									<div className='w-5 h-[1px] bg-gray-200' />
									<span className='text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400'>Notice</span>
									<div className='w-5 h-[1px] bg-gray-200' />
								</div>
								<h3 className='text-2xl font-semibold text-gray-900 mb-6'>Important Notice</h3>

								{/* Warning */}
								<p className='text-[15px] text-gray-500 leading-relaxed mb-6'>
									The website <strong className='text-gray-900'>edge-ark.com</strong> is <strong className='text-gray-900'>not</strong> affiliated with our company in any way.
								</p>

								{/* Divider */}
								<div className='w-10 h-[1px] bg-gray-200 mb-6' />

								{/* Official site */}
								<p className='text-xs text-gray-400 tracking-wide mb-1'>Our official website</p>
								<a href='https://www.edgeark.com.au' target='_blank' rel='noopener noreferrer'
									className='text-gray-900 font-semibold text-lg no-underline hover:text-gray-600 transition-colors duration-200 mb-8'>
									www.edgeark.com.au
								</a>

								{/* CTA */}
								<button
									className='w-full py-3 rounded-lg text-sm font-semibold tracking-wide
										text-white cursor-pointer border-none
										transition-all duration-200 ease-in-out
										hover:opacity-90'
									style={{ background: '#0F172A' }}
									onClick={() => setIsModalOpen(false)}
								>
									I Understand
								</button>
							</div>
						</div>
					</div>
				)}
			</main>
		</>
	)
}