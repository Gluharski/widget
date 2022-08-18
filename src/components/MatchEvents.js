const MatchEvents = ({ events }) => {
	console.log(events);
	return (
		<>
			{events.map(x => (
				<div className="match-events">
					<div className='event-time'>
						{x.time.elapsed}'
					</div>

					<div className="even-type">
						{/* {x.type} */}
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