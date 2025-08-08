import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import Container from '@/components/layout/Container';
import Title from '@/components/common/Title';
import { firebaseLogging } from '@/firebase/logEvent';

const About = () => {
	useEffect(() => {
		firebaseLogging('about_load');
	}, []);

	return (
		<Container>
			<NextSeo title="Hyoon - About" description="매력적인 사용자 경험을 추구합니다." />
			<Title main="🙋🏻‍♀️ About" description="매력적인 사용자 경험을 추구합니다." />
			<div className="flex items-center justify-center mb-8 lg:mb-10 lg:px-4 max-lg:px-2 max-lg:flex-col">
				<Image src={`/hyoon.png`} alt="소개 이미지" width={280} height={280} />
				<p className="font-light max-lg:mt-8 lg:ml-5">
					안녕하세요. <span className="font-normal theme-text-main">아이디어를 현실화하는</span>{' '}
					<span className="font-medium">프론트엔드 개발자</span> 윤효정입니다.
					<br />
					<br /> 개발을 시작하기 전, 저는 평범한 사무직 근로자였습니다. 누구나 할 수 있는 단순하고 반복되는 업무에 대한
					권태를 느끼고, 배우는 즐거움을 따라 IT 개발을 시작한 프론트엔드 개발자 윤효정입니다. <br />
					<br /> 새롭게 시작할 수 있었던 건 도전하고 배우는 것에 두려움이 없는 마음 덕분이었습니다. 성장하는 팀 문화를
					위한 커뮤니케이션을 즐기며, 이를 통한 비즈니스 가치 창출에 대한 관심이 많습니다. <br />
					<br /> 사람과 사회가 행복해지는 좋은 프로그램을 통해{' '}
					<span className="font-normal theme-text-main">선한 영향력을 끼치는</span> 개발자가 되고 싶습니다.
				</p>
			</div>
			<div className="items-center justify-between lg:flex lg:px-10">
				<div className="max-lg:mb-[34px] max-lg:px-2 min-w-[400px]">
					<h2 className="mb-3 text-2xl font-semibold theme-text-2">Interested in Tech</h2>
					<ul className="ml-2">
						<li>
							🌎 <span className="font-medium">Web, App</span>
						</li>
						<li>
							🖥 <span className="font-medium">FrontEnd</span>: JS, TS, React, Next, RN
						</li>
						<li>
							🎨 <span className="font-medium">UI/UX</span>
						</li>
					</ul>
				</div>
				<div className="max-lg:px-2 min-w-[400px]">
					<h2 className="mb-3 text-2xl font-semibold theme-text-2">Interested in Others</h2>
					<ul className="ml-2">
						<li>
							🏋🏻‍♀️ <span className="font-medium">Exercise</span>: Swimming, Crossfit
						</li>
						<li className="font-medium">✈️ Travel</li>
						<li className="font-medium">🍲 Food, Cook</li>
					</ul>
				</div>
			</div>
			<style jsx>{`
				li {
					margin-bottom: 8px;
				}
			`}</style>
		</Container>
	);
};

export default About;
