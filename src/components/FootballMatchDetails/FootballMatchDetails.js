import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const FootballMatchDetails = () => {
    const [opponents, setOpponents] = useState([]);
    const { matchId } = useParams();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${matchId}`, options)
            .then(response => response.json())
            .then(response => {
                setOpponents(response.response);
            })
            .catch(err => console.error(err));
    }, [matchId]);

    console.log(opponents);

    return (
        <section className="match-details">
            <h2 className="section-title">
                <span>
                    Match
                </span>
                Detail
            </h2>

            <div className='game-situation'>
                {opponents.map(x => (
                    <>
                        <div className='home-team-stats'>
                            <div className='home-team-image-container'>
                                <img src={x.teams.home.logo} alt={`${x.teams.home.name}`} />
                            </div>
                            <h3>
                                {x.teams.home.name}
                            </h3>
                        </div>

                        <div className='game-result'>
                            <h2>
                                {x.goals.home == null && x.goals.away == null
                                    ? 'Not started'
                                    : `${x.goals.home} - ${x.goals.away}`
                                }
                            </h2>

                            {x.league.name}
                        </div>

                        <div className='away-team-stats'>
                            <div className='away-team-image-container'>
                                <img src={x.teams.away.logo} alt={`${x.teams.away.name}`} />
                            </div>
                            <h3>
                                {x.teams.away.name}
                            </h3>
                        </div>

                    </>
                ))}
            </div>
        </section>
    );
};

export default FootballMatchDetails;