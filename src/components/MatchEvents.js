import { useState } from 'react';
import { RiFootballFill } from 'react-icons/ri/index';
import { TbArrowsRightLeft } from 'react-icons/tb/index'; // subst
import { GiCardPlay } from 'react-icons/gi/index'; // card

const MatchEvents = ({ events }) => {
	const [isVisible, setIsVisible] = useState(false);

	const checkEventTypeOfMatch = (event) => {
		if (event === 'Goal') {
			return <RiFootballFill />;
		} else if (event === 'Card') {
			return <GiCardPlay />;
		} else if (event === 'subst') {
			return <TbArrowsRightLeft />;
		}
	};

	const onClickHandler = () => {
		setIsVisible(prevValue => !prevValue);
	};

	return (
		<>
			<div className='toggle-button' onClick={onClickHandler}>
				<h6>events</h6>

				<div className='toggle-icon'>
					<h6>
						+
					</h6>
				</div>
			</div>

			<section className=
				{isVisible
					? 'match-events show'
					: 'hide'
				}>
				{events.map(x => (
					<div className="match-event">
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
			</section>
		</>
	)
}

export default MatchEvents;