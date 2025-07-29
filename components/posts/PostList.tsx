import Image from 'next/image';
import Link from 'next/link';

export interface postProps {
	post: {
		title: string;
		description: string;
		date: string;
		tags: string[];
		thumbnail?: string;
	};
	slug?: string;
	isWide?: boolean;
}

const PostList = ({ post, slug, isWide }: postProps) => {
	return (
		<Link href={`/posts/${slug}`} passHref className="w-full">
			<div className="relative p-2 my-2 duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800">
				{post.thumbnail && (
					<div
						className={`absolute top-[2px] right-2 w-[120px] h-[73px] overflow-hidden ${
							isWide ? 'max-md:static max-md:w-auto max-md:h-auto mb-[12px]' : ''
						}`}
					>
						<Image
							src={post.thumbnail}
							alt="썸네일 이미지"
							width={isWide ? 600 : 200}
							height={isWide ? 300 : 80}
							className="w-full h-auto rounded-lg border theme-border-light object-cover"
						/>
					</div>
				)}
				<div
					className={`${post.thumbnail ? 'pr-[140px] min-h-[73px]' : ''} ${
						isWide ? 'max-md:pr-0 max-md:min-h-auto' : ''
					}`}
				>
					<h2 className="text-[18px] font-bold theme-text-2 duration-200 theme-text-hover relative line-clamp-3">
						{post.title}
						{/* <NewMaker post={post} /> */}
					</h2>
					<p className="my-2 text-[14px] font-normal theme-text-3 font-scdream line-clamp-2">{post.description}</p>
				</div>
				{/* <TagList item={post.tags} /> */}
				<span className="block leading-[14px] text-[13px] font-normal theme-text-5">{post.date}</span>
			</div>
		</Link>
	);
};

export default PostList;
