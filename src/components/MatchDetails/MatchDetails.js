import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import styles from './MatchDetails.module.css';

const MatchtDetails = () => {
    const [data, setData] = useState([]);
    const { matchId } = useParams();

    useEffect(() => {
        fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${matchId}`, {
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
    }, [matchId]);

    console.log(data);

    return (
        <section className={styles['match-details-section']}>
            {data.map(x => (
                <div className={styles['match-header']}>
                    <div className={styles['home-team-info']}>
                        <div className={styles['home-team-logo']}>
                            <img src={x.teams.home.logo} />
                        </div>
                        <div className='home-team-info-name'>
                            {x.teams.home.name}
                        </div>
                    </div>

                    <div className={styles['match-result-info']}>
                        <h3>
                            {x.goals.home} - {x.goals.away}
                        </h3>
                        <span>
                            render witch half they are playing
                        </span>
                    </div>

                    <div className={styles['away-team-info']}>
                        <div className={styles['away-team-logo']}>
                            <img src={x.teams.away.logo} />
                        </div>
                        <div className='away-team-info-name'>
                            {x.teams.away.name}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
};
export default MatchtDetails;