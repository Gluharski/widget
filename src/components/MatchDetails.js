import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from "react-router-dom";

// import Info from './Info/Info';
// import Summary from './Summary/Summary';
// import Head2Head from './Head2Head/Head2Head';

import MoreDetails from './MoreDetails';

const MatchtDetails = () => {
    const [data, setData] = useState([]);
    const { matchId } = useParams();
    // const  = useRef();

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
                setData(response.response)
            })
            .catch(err => console.error(err));
    }, [matchId]);

    console.log(data);

    return (
        <div className='details'>
            {data.map(x => (
                <div className='match-header'>
                    <div className='home-team-info'>
                        <div className='home-team-logo'>
                            <img src={x.teams.home.logo} />
                        </div>
                        <div className='home-team-info-name'>
                            {x.teams.home.name}
                        </div>
                    </div>

                    <div className='match-result-info'>
                        <h3>
                            {x.score.fulltime.home} - {x.score.fulltime.away}
                        </h3>
                    </div>

                    <div className='away-team-info'>
                        <div className='away-team-logo'>
                            <img src={x.teams.away.logo} />
                        </div>
                        <div className='away-team-info-name'>
                            {x.teams.away.name}
                        </div>
                    </div>

                </div>
            ))}

            <MoreDetails {...data} />
        </div>
    )
};
export default MatchtDetails;