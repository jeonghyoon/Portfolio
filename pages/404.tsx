import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import Container from '@/components/layout/Container';
import Title from '@/components/common/Title';
import { firebaseLogging } from '@/firebase/logEvent';

const Notfound = () => {
	useEffect(() => {
		firebaseLogging('404_load');
	}, []);

	return (
		<Container>
			<NextSeo title="404 | Hyoon" description="잘못된 경로입니다." />
			<Title main="🚫 404" description="잘못된 경로입니다." />
			<Link href="/home" onClick={() => firebaseLogging('404_home_click')}>
				<div className="block p-2 text-sm border rounded-md theme-border-light theme-border-hover-light theme-bg-hover">
					홈으로 가기
				</div>
			</Link>
		</Container>
	);
};

export default Notfound;
