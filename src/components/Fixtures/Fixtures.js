import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

<<<<<<< Updated upstream
// TODO: install uuid for ids

import { setDateToLocalDate } from "../../utils/momentLibrary";
import Matches from '../Matches';
import styles from './Fixtures.module.css';
import MatchDetails from '../MatchDetails';
=======
import { setToLocalDate } from "../../utils/momentLibrary";
import MatchtDetails from '../MatchDetails';
import Match from './Match/Match'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
		<section className={styles['fixtures']}>
			<div className={styles['match-list']}>
				{data.map(x => (
					<Link to={`/fixtures/${x.fixture.id}`}>
						<Matches
							// key={x.league.id}
							// id={x.league.id}
							flag={x.league.flag}
							logo={x.league.logo}
							name={x.league.name}
							round={x.league.round}
							date={x.fixture.date}
							status={x.fixture.status}
							teams={x.teams}
							goals={x.goals}
						/>
					</Link>
				))}
			</div>
=======
		<section className='fixtures'>
			{data.map(x => (
				<Match
					flag={x.league.flag}
					logo={x.league.logo}
					name={x.league.name}
					round={x.league.round}
					date={x.fixture.date}
					status={x.fixture.status}
					teams={x.teams}
				/>
			))}

			<MatchtDetails />
>>>>>>> Stashed changes
		</section>
	)
};

export default Fixtures;