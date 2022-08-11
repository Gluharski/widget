import { useState, useEffect } from "react";

const FootballResults = () => {
    const [matches, setMatches] = useState([]);
    const [showMore, setShowMore] = useState(10);

    useEffect(() => {
        fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2022-08-11', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response.response);
                setMatches(response.response);
            })
            .catch(err => console.error(err));
    }, []);

    // const onClickHandler = () => {
    //     setShowMore((prevState) => prevState + 10);
    // };

    return (
        <section id="football-results">
            <h2 className="section-title">Football Results</h2>

            <ul>
                {matches.map(m => (
                    <li key={m.fixture.id} className="list-item">
                        <div className="league-information">
                            <div className="league-flag-container">
                                <img src={m.league.flag} />
                            </div>
                            <h3 className="league-name">
                                {m.league.country} {m.league.name}
                            </h3>
                        </div>

                        <div className="teams">
                            {/* home team information */}
                            <div className="home-team">
                                <div className="home-team-logo">
                                    <img src={m.teams.home.logo} />
                                </div>
                                <div className="home-team-name">
                                    {m.teams.home.name}
                                </div>
                                <div className="home-team-result">
                                    {m.goals.home}
                                </div>
                            </div>

                            {/* TODO: div separator */}
                            {/* <div className="separator">-</div> */}

                            {/* away team information*/}
                            <div className="away-team">
                                <div className="away-team-logo">
                                    <img src={m.teams.away.logo} />
                                </div>
                                <div className="away-team-name">
                                    {m.teams.away.name}
                                </div>
                                <div className="away-team-result">
                                    {m.goals.away}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
                {/* <button onClick={onClickHandler}>show more</button> */}
            </ul>

            {/* {matches.slice(0, showMore).map(m => <MatchDetails key={m.fixture.id} data={m} />)} */}

        </section>
    );
};

export default FootballResults;