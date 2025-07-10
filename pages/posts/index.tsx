import { ChangeEvent, useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { allPosts } from 'contentlayer/generated';

import Container from '@/components/layout/Container';
import Title from '@/components/common/Title';
import Search from '@/components/posts/Search';
import CategoryList from '@/components/posts/CategoryList';
import PostList from '@/components/posts/PostList';

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [search, setSearch] = useState<string>('');
	const [click, setClick] = useState<boolean>(false);
	const [sellect, setSellect] = useState<string>('all');

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSellect('');
		setSearch(e.target.value.toLowerCase());
	};

	const clickSearch = () => {
		setClick(!click);
		click ? setSellect('all') : setSellect('');
	};

	return (
		<Container>
			<NextSeo title="Hyoon - Posts" description="배우고 알게된 것들을 기록합니다." />
			<Title main="✍🏻 Posts" description="배우고 알게된 것들을 기록합니다." />
			<div className="flex items-start justify-between m-1 max-md:mb-4 max-md:flex-col-reverse">
				<CategoryList sellect={sellect} setSellect={setSellect} setClick={setClick} posts={posts} />
				<Search click={click} onChange={handleSearch} onClick={clickSearch} />
			</div>
			<div className="mb-5 flex flex-wrap max-md:max-w-[664px] max-md:content-center mx-auto my-0 max-md:flex-col">
				{click ? (
					<>
						{posts
							.filter((post) => post.title.toLowerCase().includes(search))
							.map((post: any) => (
								<PostList post={post} slug={post._raw.flattenedPath} key={post._id} />
							))}
					</>
				) : (
					<>
						{sellect === 'all'
							? posts.map((post: any) => <PostList post={post} slug={post._raw.flattenedPath} key={post._id} />)
							: posts
									.filter((post: any) => post.category === sellect)
									.map((post: any) => <PostList post={post} slug={post._raw.flattenedPath} key={post._id} />)}
					</>
				)}
			</div>
		</Container>
	);
};

export const getStaticProps = async () => {
	const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	return {
		props: {
			posts,
		},
	};
};

export default Posts;
