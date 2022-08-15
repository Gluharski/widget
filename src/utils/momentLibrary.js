import moment from 'moment-timezone';

// convert utc date to local
export const convertUTCDateToLocalDate = (date) => {
	const utcDate = moment.utc(date).format('YYYY-MM-DD HH:mm:ss');
	// console.log(utcDate); // 2015-09-13 03:39:27

	const stillUtc = moment.utc(utcDate).toDate();
	const local = moment(stillUtc).local().format('HH:mm');

	return local;
};

// returns the current day of the month
export const setDay = () => {
	const utcDate = moment.utc().format('YYYY-MM-DD HH:mm:ss');

	const stillUtc = moment.utc(utcDate).toDate();
	const day = moment(stillUtc).local().format('DD');

	console.log(day);
	return day;
};