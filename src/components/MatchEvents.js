import { RiFootballFill } from 'react-icons/ri/index';
import { TbArrowsRightLeft } from 'react-icons/tb/index'; // subst
import { GiCardPlay } from 'react-icons/gi/index'; // card

const MatchEvents = ({ events }) => {
	const checkEventTypeOfMatch = (event) => {
		if (event == 'Goal') {
			return <RiFootballFill />;
		} else if (event == 'Card') {
			return <GiCardPlay />;
		} else if (event == 'subst') {
			return <TbArrowsRightLeft />;
		}
	};

	return (
		<>
			{events.map(x => (
				<div className="match-events">
					<div className='event-time'>
						{x.time.elapsed}'
					</div>

					<div className="event-type">
						{checkEventTypeOfMatch(x.type)}
					</div>

					<div className='evet-text'>
						{`${x.type} for ${x.team.name}`}
					</div>
				</div>
			))}
		</>
	)
}

export default MatchEvents;