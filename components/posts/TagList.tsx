interface TagListProps {
	item: string[];
	className?: string;
}

export const TagList = ({ item = [], className = '' }: TagListProps) => {
	return (
		<div className={`flex flex-wrap ${className}`}>
			{item.map((i) => (
				<span key={i} className="mb-1 mr-3 italic theme-text-main-dark">
					#{i}
				</span>
			))}
		</div>
	);
};
