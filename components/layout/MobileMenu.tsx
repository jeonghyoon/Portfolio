import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import navlinks from '@/data/navlinks';
import { firebaseLogging } from '@/firebase/logEvent';

const MobileMenu = () => {
	const router = useRouter();
	const [onClick, setOnClick] = useState(false);
	const toggleOnClick = () => {
		setOnClick(!onClick);
		firebaseLogging(`nav_mobile_click`);
	};

	return (
		<div className="flex content-center justify-center mr-3 lg:hidden">
			<div
				className="cursor-pointer z-20 rounded-lg theme-bg-hover-2 duration-200 w-[47px] h-[45px] flex items-center justify-center"
				onClick={toggleOnClick}
			>
				<div className={`relative blodck w-[28px] h-[20px]`}>
					<div className={`${onClick && 'top'} top-0 soild theme-bg-black`} />
					<div className={`${onClick && 'hidden'} top-2 soild theme-bg-black`} />
					<div className={`${onClick && 'bottom'} bottom-0 soild theme-bg-black`} />
				</div>
			</div>
			<div
				className={`${
					onClick && 'sideBar'
				} translate-x-full translate-y-0 z-10 fixed top-0 bottom-0 right-0 w-full ease duration-300 rotate-0 theme-bg-0`}
			>
				<div className="p-2">
					<Link href="/home" onClick={() => firebaseLogging(`nav_Home_click`)}>
						<Image src={`/logo.png`} alt="로고" width={45} height={45} />
					</Link>
				</div>
				<div className="flex flex-col flex-wrap content-center px-3 py-12">
					{navlinks.map((nav) => (
						<Link href={nav.link} key={nav.title} onClick={() => firebaseLogging(`nav_${nav.title}_click`)}>
							<h2
								className={`${
									router.pathname.startsWith(`${nav.link}`) && 'theme-text-main'
								} text-[34px] max-w-sm font-bold mb-7 cursor-pointer`}
							>
								{nav.icon} {nav.title}
							</h2>
						</Link>
					))}
				</div>
			</div>
			<style jsx>{`
				.sideBar {
					transform: translate(0, 0);
				}
				.soild {
					position: absolute;
					left: 0;
					width: 100%;
					height: 2px;
					transition: all 0.5s;
				}
				.top {
					transform: translateY(8.5px) rotate(-45deg);
				}
				.bottom {
					transform: translateY(-8.5px) rotate(45deg);
				}
			`}</style>
		</div>
	);
};

export default MobileMenu;
