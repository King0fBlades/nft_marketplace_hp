import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
	<ThemeProvider attribute="class">
		<div className="dark:bg-nft-dark bg-white min-h-screen">
			<Navbar />
			<div className="pt-20">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>

		<Script
			src="https://kit.fontawesome.com/684c3ce875.js"
			crossorigin="anonymous"
		></Script>
	</ThemeProvider>
);

export default MyApp;
