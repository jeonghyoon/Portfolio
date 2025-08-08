import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

import Container from '@/components/layout/Container';
import Title from '@/components/common/Title';
import project from '@/data/project';
import BoxList from '@/components/project/BoxList';
import { firebaseLogging } from '@/firebase/logEvent';

const Project = () => {
	useEffect(() => {
		firebaseLogging('project_load');
	}, []);

	return (
		<Container>
			<NextSeo title="Hyoon - Project" description="뚝딱뚝딱 프로젝트 공장입니다." />
			<Title main="🗂️ Project" description="뚝딱뚝딱 프로젝트 공장입니다." />
			<div className="flex flex-wrap max-lg:max-w-[664px] max-md:content-center mx-auto my-0 max-md:flex-col">
				{project.map((post) => (
					<BoxList key={post.id} post={post} />
				))}
			</div>
		</Container>
	);
};

export default Project;
