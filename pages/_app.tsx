import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from "antd";
import { TopNavbar } from '../components'

const { Content } = Layout;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout className='w-full relative'>
			<TopNavbar />
			<Content>
				<Component {...pageProps} />
			</Content>
		</Layout>
	)
}
