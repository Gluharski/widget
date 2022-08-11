import moment from 'moment-timezone';

export const momentLibrary = (date) => {
	const utcDate = moment.utc(date).format('YYYY-MM-DD HH:mm:ss');
	// console.log(utcDate); // 2015-09-13 03:39:27
	
	const stillUtc = moment.utc(utcDate).toDate();
	const local = moment(stillUtc).local().format('HH:mm');

	return local;
};