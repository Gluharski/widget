import { useState, useEffect } from 'react';
import { momentLibrary } from '../../utils/momentLibrary';
import { Link } from 'react-router-dom';

import styles from '../LiveMatchesList/LiveMatchesList.module.css';

const FixturesMatchList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-04-07', {
			headers: {
				'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
				'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
			}
		})
			.then(res => res.json())
			.then(res => {
				console.log(res.response);
				setData(res.response)
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<section className={styles['fixture-matches-list']}>
			<ul>
				{data.length <= 0
					? 'There is no fixtures yet. Please, try again later.'
					: data.map(m => (
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
											<div className={styles['left-column']}>
												<div className={styles['home-team-logo']}>
													<img src={m.teams.home.logo} alt="#" />
												</div>

												<div className={styles['home-team-name']}>
													{m.teams.home.name}
												</div>
											</div>

											<div className='home-team-score'>
												{m.goals.home}
											</div>
										</div>

										{/* away team information*/}
										<div className={styles['away-team']}>
											<div className={styles['left-column']}>
												<div className={styles['away-team-logo']}>
													<img src={m.teams.away.logo} alt="#" />
												</div>

												<div className={styles['away-team-name']}>
													{m.teams.away.name}
												</div>
											</div>

											<div className='away-team-score'>
												{m.goals.away}
											</div>
										</div>
									</div>
								</Link>
							</div>
						</li>
					))}
			</ul>
		</section>
	)
};

export default FixturesMatchList;