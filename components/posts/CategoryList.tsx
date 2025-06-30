import { Dispatch, SetStateAction } from 'react';
import { Post } from 'contentlayer/generated';

import { categorys } from '@/data/categorys';

interface CategoryListProps {
	sellect: string;
	setSellect: Dispatch<SetStateAction<string>>;
	setClick: Dispatch<SetStateAction<boolean>>;
	posts: Post[];
}

export default function CategoryList({ sellect, setSellect, setClick, posts }: CategoryListProps) {
	return (
		<div className="flex flex-wrap gap-3">
			{categorys.map((category) => {
				const postCount = posts.filter((post) => post.category === category.keyword).length;
				return (
					<button
						type="button"
						onClick={() => {
							setSellect(category.keyword);
							setClick(false);
						}}
						key={category.keyword}
						className={`px-3 py-1 theme-bg-3 text-[15px] rounded-2xl leading-[23px] ${
							category.keyword == sellect && 'theme-bg-main text-[#fff]'
						}`}
					>
						{category.title} ({category.keyword === 'all' ? posts.length : postCount})
					</button>
				);
			})}
		</div>
	);
}
