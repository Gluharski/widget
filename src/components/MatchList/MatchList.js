import { useState, useEffect } from "react";

import MatchDetails from "./MatchDetails/MatchDetails";

const MatchList = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-01-29', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => {
                setMatches(response.response);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <ul className="match-list">
            {matches.map(m => <MatchDetails key={m.fixture.id} data={m} />)}
        </ul>
    );
};

export default MatchList;