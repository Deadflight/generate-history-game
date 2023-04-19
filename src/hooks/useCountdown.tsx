import { useEffect, useState } from "react";

export const useCountdown = (targetDate: Date) => {
	const countdownDate = new Date(targetDate).getTime();

	const [countdown, setCountdown] = useState(
		countdownDate - new Date().getTime()
	);

	useEffect(() => {
		console.log("countDown");
		if (countdown > 0) {
			const interval = setInterval(() => {
				setCountdown(countdownDate - new Date().getTime());
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [countdown, countdownDate]);

	return { countdown };
};
