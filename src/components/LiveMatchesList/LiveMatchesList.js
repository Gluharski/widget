import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { momentLibrary } from '../../utils/momentLibrary';

import styles from './LiveMatchesList.module.css';

const LiveMatchesList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
				'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
			}
		})
			.then(res => res.json())
			.then(res => {
				setData(res.response)
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<section className="football-live-score">
			{/* <h2 className="section-title">
				<span>
					Football
				</span>
				Live Scores
			</h2> */}

			<ul>
				{data.map(m => (
					<li key={m.fixture.id} className="list-item">
						<div className={styles['league-information']}>
							<div className={styles['league-flag-container']}>
								<img src={m.league.flag} alt="#" />
							</div>

							<div>
								<h3 className={styles['league-name']}>
									{m.league.name}
								</h3>

								<h3 className={styles['league-country']}>
									{m.league.country}
								</h3>
							</div>
						</div>

						<div className={styles['league-row']}>
							<Link to={`/${m.fixture.id}`}>
								<div className={styles['match-information']}>
									<div className={styles['match-date']}>
										{momentLibrary(m.fixture.date)}
									</div>
								</div>

								<div className={styles['teams']}>
									{/* home team information */}
									<div className={styles['home-team']}>
										<div className={styles['home-team-logo']}>
											<img src={m.teams.home.logo} alt="#" />
										</div>

										<div className={styles['home-team-name']}>
											{m.teams.home.name}
										</div>
									</div>

									{/* away team information*/}
									<div className={styles['away-team']}>
										<div className={styles['away-team-logo']}>
											<img src={m.teams.away.logo} alt="#" />
										</div>

										<div className={styles['away-team-name']}>
											{m.teams.away.name}
										</div>
									</div>
								</div>
							</Link>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default LiveMatchesList;