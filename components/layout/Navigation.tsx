import { useEffect, useRef, useState } from 'react';
import navlinks from '@/data/navlinks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';

type Theme = null | 'dark' | 'light';

const Navigation = () => {
	const headerRef = useRef<HTMLElement>(null);
	const router = useRouter();
	const [theme, setTheme] = useState<Theme>('dark');

	const handleScroll = () => {
		window.scrollY > 0
			? headerRef.current?.classList.add('theme-header-shadow')
			: headerRef.current?.classList.remove('theme-header-shadow');
	};

	const handleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		window.localStorage.setItem('theme', newTheme);
		document.body.className = newTheme;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setTheme(document.body.className as Theme);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header ref={headerRef} className="fixed top-0 left-0 z-20 w-full p-2 theme-bg-0 flex-0">
			<div className="flex flex-row items-center justify-between max-w-screen-lg m-auto">
				<div className="flex flex-row items-center duration-200 rounded-lg theme-bg-hover-2">
					<Link href="/home">
						<Image src={`/logo.png`} alt="로고" width={45} height={45} />
					</Link>
				</div>
				<nav className="flex justify-center">
					<button type="button" className="mr-4" onClick={handleTheme}>
						{theme === 'dark' ? <p className="text-[22px]">🌚</p> : <p className="text-[22px]">🌝</p>}
					</button>
					<div className="flex flex-wrap content-center max-lg:hidden">
						{navlinks.map((nav) => (
							<Link href={nav.link} key={nav.title}>
								<div
									className={`${
										router.pathname.startsWith(`${nav.link}`)
											? 'theme-text-main'
											: 'relative after:absolute after:opacity-90 after:w-1/6 after:h-1 after:hover:w-full after:right-0 after:transparent hover:after:bg-[#7ADCD7] dark:hover:after:bg-[#63C7C2] after:bottom-[-7px] after:duration-300 after:ease-out after:mx-[45%] hover:after:mx-0'
									} mr-5 text-base font-medium`}
								>
									{nav.title}
								</div>
							</Link>
						))}
					</div>
					<MobileMenu />
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
