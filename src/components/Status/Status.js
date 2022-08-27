const Status = ({ status }) => {
	console.log(status);

	const rednerMatchStatus = () => {
		if (status.long === 'Not Started') {
			return `${status.short}`
		} else if (status.long === 'Match Postponed') {
			return `${status.short}`
		} else if (status.long === 'Match Canceleed') {
			return `${status.short}`
		} else if (status.long === 'Time to be defined') {
			return `${status.short}`
		}
	}

	return (
		<>
			{rednerMatchStatus()}
		</>
	)
}

export default Status;