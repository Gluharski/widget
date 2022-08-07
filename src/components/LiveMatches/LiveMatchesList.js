import { useState, useEffect } from 'react';

import LiveMatchCard from './LiveMatchCard/LiveMatchCard';

const LiveMatchesList = () => {
    const [liveMatches, setLiveMatches] = useState([]);

    useEffect(() => {
        fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => {
                setLiveMatches(response.response)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <ul className='match-list'>
            {liveMatches.map(m => <LiveMatchCard key={m.fixture.id} data={m} />)}
        </ul>
    )
};

export default LiveMatchesList;