import { EventParams, logEvent } from 'firebase/analytics';
import { analytics } from './init';

export const firebaseLogging = (
	eventName: string,
	eventParams?:
		| {
				[key: string]: any;
				coupon?: EventParams['coupon'];
				currency?: EventParams['currency'];
				items?: EventParams['items'];
				payment_type?: EventParams['payment_type'];
				value?: EventParams['value'];
		  }
		| undefined,
): void => {
	if (analytics) {
		logEvent(analytics, eventName, eventParams);
		return;
	}

	console.log(`Firebase Analytics is not supported`);
};
