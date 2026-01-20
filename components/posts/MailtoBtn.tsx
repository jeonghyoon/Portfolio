import { firebaseLogging } from '@/firebase/logEvent';

interface MailtoBtnProps {
	containerStyle?: string;
	iconColor?: string;
	iconSize?: string | number;
}

const MailtoBtn = ({
	containerStyle = 'theme-bg-main-dark w-8 h-8',
	iconColor = '#fff',
	iconSize = 16,
}: MailtoBtnProps) => {
	const handleMailto = () => {
		firebaseLogging('mailto_click', {
			purpose: 'contact',
			category: 'user_interaction',
		});
	};

	return (
		<a
			aria-label="icon-button"
			href="mailto:jeongyoon.dev@gmail.com"
			onClick={handleMailto}
			className={`rounded-full flex items-center justify-center ${containerStyle}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height={iconSize}
				width={iconSize}
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke={iconColor}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
				/>
			</svg>
		</a>
	);
};

export default MailtoBtn;
