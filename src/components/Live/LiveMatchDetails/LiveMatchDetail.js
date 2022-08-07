import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const LiveMatchDetails = () => {
    const [match, setMatch] = useState([]);
    const { matchId } = useParams();

    useEffect(() => {
        fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${matchId}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => {
                setMatch(response.response)
            })
            .catch(err => console.error(err));
    }, [matchId]);

    console.log(match);

    return (
        <>
            {match.map(x =>
                <div>
                    <Link to="/live">BACK</Link>

                    Stadium: {x.fixture.venue.name} ({x.fixture.venue.city})
                    <div>
                        <h2>
                            {x.teams.home.name}
                        </h2>
                        <img src={x.teams.home.logo} />
                    </div>

                    <div>
                        <h2>
                            {x.goals.home} - {x.goals.away}
                        </h2>
                    </div>

                    <h2>
                        {x.fixture.status.elapsed}
                        <span className='match-animation'>'</span>
                    </h2>

                    <div>
                        <h2>
                            {x.teams.away.name}
                        </h2>
                        <img src={x.teams.away.logo} />
                    </div>
                </div>
            )}
        </>
    )
}

export default LiveMatchDetails;