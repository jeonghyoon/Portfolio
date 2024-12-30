import { useEffect, useRef } from 'react';

export default function Utterances() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const getTheme = localStorage.getItem('theme');

		const theme = getTheme === 'dark' ? 'github-dark' : 'github-light';
		if (!ref.current || ref.current.hasChildNodes()) return;

		const scriptElem = document.createElement('script');
		scriptElem.src = 'https://utteranc.es/client.js';
		scriptElem.async = true;
		scriptElem.crossOrigin = 'anonymous';
		scriptElem.setAttribute('repo', 'jeonghyoon/Portfolio');
		scriptElem.setAttribute('issue-term', 'pathname');
		scriptElem.setAttribute('label', ':speech_balloon:');
		scriptElem.setAttribute('theme', theme);

		ref.current.appendChild(scriptElem);
	}, []);

	return <section ref={ref} />;
}
