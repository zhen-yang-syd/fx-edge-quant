import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "antd";
import { Loading, TopNavbar } from '../components'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
	weight: ["400", '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const { Content } = Layout;
	const [loading, setLoading] = useState(false);
	// router changing adding loading page
	useEffect(() => {
		const handleStart = () => {
			setLoading(true);
		};
		const handleComplete = () => {
			setLoading(false);
		};
		const handleError = () => {
			setLoading(false);
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleError);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleError);
		};
	}, [router]);
	return (
		<Layout className={`w-full relative ${montserrat.className}`}>
			<TopNavbar />
			<Content>
				{/* {loading && <Loading />} */}
				<Component {...pageProps} />
			</Content>
		</Layout>
	)
}
