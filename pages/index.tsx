/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import linkdata from '@/data/linkdata';
import { firebaseLogging } from '@/firebase/logEvent';
import CopyLinkBtn from '@/components/posts/CopyLinkBtn';
import MailtoBtn from '@/components/posts/MailtoBtn';

const Index = () => {
	const meta = {
		title: '풀스택 개발자 효동동 | Hyoon',
		description: '디자인도 하고 웹도 만들고 앱도 만드는 새럼',
		image: '/main.jpg',
	};

	useEffect(() => {
		firebaseLogging('index_load');
		window.localStorage.setItem('theme', 'light');
	}, []);

	return (
		<div className="flex flex-col min-h-screen m-auto bg-gray-100">
			<NextSeo title={meta.title} description={meta.description} openGraph={{ images: [{ url: meta.image }] }} />
			<div className="max-w-[460px] flex flex-col items-center w-full min-h-screen px-5 py-8 m-auto">
				<div className="flex items-center justify-between w-full mb-2">
					<CopyLinkBtn containerStyle="bg-white w-[30px] h-[30px]" copyIconColor="#333" checkIconColor="#14b8a6" />
					<MailtoBtn containerStyle="bg-white w-[30px] h-[30px] hover-effect" iconColor="#555" />
				</div>
				<div className="flex flex-col items-center flex-1 w-full mb-5">
					<Image
						src={meta.image}
						alt="프로필_이미지"
						width={500}
						height={500}
						className="w-[100px] h-[100px] rounded-[30px] mb-6"
					/>
					<h1 className="relative mb-3 text-xl font-bold dark:text-zinc-800">
						{meta.title}
						<span className="absolute bottom-0 right-0 h-[6px] opacity-40 w-[60px] bg-[#63C7C2]" />
					</h1>
					<p className="mb-5 text-sm dark:text-zinc-700 text-zinc-700">{meta.description}</p>
					{linkdata.map((data) => (
						<Link
							href={data.link}
							key={data.title}
							className="w-full"
							target={data.link == '/home' ? '' : '_blank'}
							onClick={() => firebaseLogging(`index_${data.title}_click`)}
						>
							<div className="flex flex-row items-center p-4 mb-3 duration-300 bg-white rounded-xl dark:bg-white shadow-jsx hover:bg-[#9aefeb] max-lg:hover:bg-white">
								<div className="mr-4 w-[72px] h-[72px] overflow-hidden rounded-md flex justify-center">
									<Image src={data.image} alt="로고" width={500} height={500} className="max-w-none w-auto h-[72px]" />
								</div>
								<div className="flex-1">
									<h2 className="text-[17px] font-semibold dark:text-zinc-800">{data.title}</h2>
									<div className="flex flex-row items-center">
										<p className="text-[13px] dark:text-zinc-800">{data.description}</p>
										{data.link !== '/home' && (
											<svg
												viewBox="0 0 14 14"
												width="12"
												height="12"
												fill="#999"
												className="text-zinc-400 ml-[6px] mb-[3px] shrink-0"
											>
												<path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
											</svg>
										)}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div className="flex items-center mb-2">
					<Image src="/logo.png" alt="푸터_로고_이미지" width={500} height={500} className="w-11 h-11" />
					<h2 className="ml-2 text-2xl font-extrabold dark:text-zinc-800">Hyoon</h2>
				</div>
				<p className="text-[11.5px] text-zinc-500 dark:text-zinc-500 italic mb-3">
					이 사이트의 코드는
					<Link
						href="https://github.com/jeonghyoon/Portfolio"
						target="_blank"
						className="p-[5px] underline dark:text-zinc-800 hover:text-[#68aca7] duration-200"
						onClick={() => firebaseLogging(`index_code_click`)}
					>
						여기서
					</Link>
					확인 할 수 있어요 (*´∀`*)ゞ
				</p>
			</div>
			<style jsx>{`
				p {
					font-family: 'SCDream', system-ui, sans-serif;
				}
				.hover-effect {
					&:hover {
						box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
						transform: scale(1.05);
					}
				}
				.shadow-jsx {
					box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
					&:hover {
						box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2);
						transform: scale(1.03);
						// transform: translateY(-4px);
					}
				}
			`}</style>
		</div>
	);
};

export default Index;
