import { useState, useEffect } from 'react';

// TODO: install uuid for ids

import { setDateToLocalDate } from "../../utils/momentLibrary";
import Matches from '../Matches';

const Fixtures = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${setDateToLocalDate()}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
				'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
			}
		})
			.then(response => response.json())
			.then(response => {
				setData(response.response);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<section className='fixtures'>
			{data.map(x => (
				<Matches
					// key={x.league.id}
					id={x.league.id}
					flag={x.league.flag}
					logo={x.league.logo}
					name={x.league.name}
					round={x.league.round}
					date={x.fixture.date}
					status={x.fixture.status}
					teams={x.teams}
				/>
			))}
		</section>
	)
};

export default Fixtures;