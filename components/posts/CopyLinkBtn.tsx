import { firebaseLogging } from '@/firebase/logEvent';
import { useState, useEffect } from 'react';

interface CopyLinkBtnProps {
	containerStyle?: string;
	checkIconColor?: string;
	copyIconColor?: string;
	iconSize?: string | number;
}

const CopyLinkBtn = ({
	containerStyle = 'theme-bg-main-dark absolute bottom-[2px] w-8 h-8 ml-3',
	checkIconColor = '#fff',
	copyIconColor = '#fff',
	iconSize = 16,
}: CopyLinkBtnProps) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		let timeOut: NodeJS.Timeout;

		if (copied) {
			timeOut = setTimeout(() => setCopied(false), 1500);
		}
		return () => {
			timeOut && clearInterval(timeOut);
		};
	}, [copied]);

	const handleCopy = async () => {
		const url = window.document.location.href;

		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			firebaseLogging('link_copy', {
				purpose: 'share_content',
				category: 'user_interaction',
			});
			window.alert('링크를 복사했습니다.');
		} catch (e) {
			console.error(e);
			window.alert('링크 복사에 실패했습니다.');
		}
	};

	return (
		<button aria-label="icon-button" onClick={handleCopy} className={`rounded-full ${containerStyle}`}>
			{copied ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height={iconSize}
					width={iconSize}
					viewBox="0 0 16 16"
					strokeWidth={1}
					fill={checkIconColor}
					className="mx-auto my-0"
				>
					<path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height={iconSize}
					width={iconSize}
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke={copyIconColor}
					className="mx-auto my-0"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
					/>
				</svg>
			)}
		</button>
	);
};

export default CopyLinkBtn;
