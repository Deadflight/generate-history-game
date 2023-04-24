import { useEffect, useState } from "react";

export const useCountdown = (targetDate: Date) => {
	const countdownDate = new Date(targetDate).getTime();

	const [countdown, setCountdown] = useState(
		countdownDate - new Date().getTime()
	);
	const [isTimeout, setIsTimeout] = useState(false);

	useEffect(() => {
		if (countdown > 0) {
			const interval = setInterval(() => {
				setCountdown(countdownDate - new Date().getTime());
			}, 1000);

			return () => clearInterval(interval);
		} else {
			setIsTimeout(true);
		}
	}, [countdown, countdownDate]);

	return { countdown, isTimeout };
};
