import { convertUTCtoLocalDate } from '../../../../utils/momentLibrary';

const Date = ({ date }) => {
	return (
		<div className='date'>
			{convertUTCtoLocalDate(date)}
		</div>
	)
};

export default Date;