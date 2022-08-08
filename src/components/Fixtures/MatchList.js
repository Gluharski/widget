import { useState, useEffect } from "react";

import MatchDetails from "./MatchDetails/MatchDetails";

const MatchList = () => {
    const [matches, setMatches] = useState([]);
    const [showMore, setShowMore] = useState(10);

    useEffect(() => {
        fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2022-08-08', {
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

    const onClickHandler = () => {
        setShowMore((prevState) => prevState + 10);
    };

    return (
        <ul className="match-list">
            <button onClick={onClickHandler}>show more</button>
            {matches.slice(0, showMore).map(m => <MatchDetails key={m.fixture.id} data={m} />)}
        </ul>
    );
};

export default MatchList;