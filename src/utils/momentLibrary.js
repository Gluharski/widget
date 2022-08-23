import moment from 'moment-timezone';

export const convertUTCtoLocalDate = (date) => {
	const utcDate = moment.utc(date).format('YYYY-MM-DD HH:mm:ss');
	// console.log(utcDate); // 2015-09-13 03:39:27

	const stillUtc = moment.utc(utcDate).toDate();
	const local = moment(stillUtc).local().format('HH:mm');

	return local;
};

export const setToLocalDate = () => {
	const utcDate = moment.utc().format('YYYY-MM-DD HH:mm:ss');

	const stillUtc = moment.utc(utcDate).toDate();
	const localDate = moment(stillUtc).local().format('YYYY-MM-DD');

	return localDate;
};