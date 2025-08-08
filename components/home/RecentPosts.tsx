import Link from 'next/link';
import PostList from '../posts/PostList';
import { firebaseLogging } from '@/firebase/logEvent';

const RecentPosts = ({ posts }: any) => {
	return (
		<section className="mt-10">
			<Link
				href="/posts"
				className="flex items-end justify-between pb-4 mb-4 border-b border-1 theme-border-y"
				onClick={() => firebaseLogging('home_postMore_click')}
			>
				<h1 className="text-3xl italic font-bold">Recent Posts 📝</h1>
				<p className="px-2 text-lg font-light transition-transform theme-text-2">→</p>
			</Link>
			<div className="flex flex-col">
				{posts.slice(0, 3).map((post: any) => (
					<PostList post={post} slug={post._raw.flattenedPath} key={post._id} />
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
