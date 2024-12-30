import Link from 'next/link';

const Intro = () => {
	return (
		<div className="flex items-center justify-center px-2 max-lg:flex-col">
			{/* 메인 이미지 */}
			<div
				className={`max-md:w-full max-md:h-[46vw] w-[400px] h-[200px] bg-no-repeat bg-cover bg-[url('/og_image_white.png')] dark:bg-[url('/og_image.png')]`}
			/>
			<div className="mt-5 lg:ml-7">
				<h2 className="mb-2 text-[19px]">
					안녕하세요.{` `}
					<span className="font-medium">프론트엔드 개발자</span> 윤효정입니다.
					<br />
				</h2>
				<h3 className="mb-4 text-base ">
					사람과 사회가 행복해지는 좋은 프로그램을 통해{' '}
					<span className="font-normal theme-text-main">선한 영향력을 끼치고</span> 싶습니다.
				</h3>
				<div className="flex items-center justify-between">
					<div className="flex">
						<Link href="/about">
							<p className="font-light transition-transform theme-icon-main hover:scale-110">→ About</p>
						</Link>
						{/* <Link href="https://hyoon-share.notion.site/hyoon-e669d80400f64128b536582b0af7756a" target="_blank">
							<div className="ml-5 text-[15px] font-light transition-transform theme-icon-main hover:scale-110">
								→ Resume
							</div>
						</Link> */}
					</div>
					<div className="flex">
						<a
							href="mailto:hyoon.dev@gmail.com"
							className="mr-5 transition-transform duration-500 hover:scale-110 theme-icon-main"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
							</svg>
						</a>
						<a
							href="https://github.com/jeonghyoon"
							className="transition-transform duration-500 hover:scale-110 theme-icon-main"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
