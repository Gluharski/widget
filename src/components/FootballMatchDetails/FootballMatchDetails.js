import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import MatchEvents from '../MatchEvents';
import MatchStats from '../MatchStats';
import Lineups from '../Lineups';

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
                        <div className='match-header'>
                            <div className='home-team-stats'>
                                <div className='home-team-image-container'>
                                    <img src={x.teams.home.logo} alt={`${x.teams.home.name}`} />
                                </div>
                                <h3>
                                    {x.teams.home.name}
                                </h3>

                                <div>
                                </div>
                            </div>

                            <div className='game-result'>
                                <h2>
                                    {x.goals.home == null && x.goals.away == null
                                        ? 'Not started'
                                        : `${x.goals.home} : ${x.goals.away}`
                                    }
                                </h2>

                                <h6>
                                    Half Time: ({x.score.halftime.home}:{x.score.halftime.away})
                                </h6>

                                <div className='league-round'>
                                    {x.league.name}: {x.league.round}
                                </div>

                                <div className='match-stadium'>
                                    {x.fixture.venue.name !== undefined
                                        ? `${x.fixture.venue.name} (${x.fixture.venue.city})`
                                        : null
                                    }
                                </div>
                            </div>

                            <div className='away-team-stats'>
                                <div className='away-team-image-container'>
                                    <img src={x.teams.away.logo} alt={`${x.teams.away.name}`} />
                                </div>
                                <h3>
                                    {x.teams.away.name}
                                </h3>
                            </div>
                        </div>

                        <MatchStats key={x.fixture.id} stats={x} />
                        <MatchEvents key={x.fixture.id} {...x} />
                        <Lineups key={x.fixture.id} lineup={x.lineups} />
                        {/* match events */}
                        {/* <div className='match-events'>
                            <div className='event-type'>
                                {x.events.type || null}
                            </div>
                            
                            <div className='event-time'>
                                {x.events.time.elapsed || null}'
                            </div>

                            <div className='evet-text'>
                                {`${x.events.time.elapsed}' ${x.events.type} for ${x.events.team.name}`}
                            </div>
                        </div> */}
                    </>
                ))}
            </div>
        </section>
    );
};

export default FootballMatchDetails;