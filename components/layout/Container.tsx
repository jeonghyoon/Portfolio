import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';

import metadata from '@/data/metadata';
import Navigation from './Navigation';
import Footer from './Footer';
import { firebaseLogging } from '@/firebase/logEvent';

const Container = (props: any) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleWindowScroll = () => {
			if (window.scrollY > 50) setShow(true);
			else setShow(false);
		};

		window.addEventListener('scroll', handleWindowScroll);
		return () => window.removeEventListener('scroll', handleWindowScroll);
	}, []);

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		firebaseLogging(`footer_scrollTop_click`);
	};

	return (
		<div className="flex flex-col items-center w-screen min-h-screen theme-bg-0 pt-[60px]">
			<NextSeo
				openGraph={{
					siteName: `${metadata.author}`,
					type: 'website',
					url: 'https://www.hyoon.dev/',
					images: [
						{
							url: 'https://www.hyoon.dev/og_image.png',
						},
					],
				}}
				additionalMetaTags={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
					},
				]}
			/>
			<Navigation />
			<main className="flex-1 w-full max-w-screen-lg p-3">{props.children}</main>
			<Footer />
			<div className="fixed right-8 bottom-8">
				<button
					aria-label="Scroll To Top"
					type="button"
					onClick={handleScrollTop}
					className={`p-3 transition-all rounded-full theme-bg-2  ${show ? 'flex' : 'hidden'}`}
				>
					<svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
export default Container;
