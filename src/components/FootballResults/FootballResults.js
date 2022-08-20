import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { momentLibrary } from "../../utils/momentLibrary";
import { setDay } from "../../utils/momentLibrary";

const FootballResults = () => {
    const [matches, setMatches] = useState([]);
    const [values, setValues] = useState(5);

    useEffect(() => {
        fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2022-08-15`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response.response);
                setMatches(response.response);
            })
            .catch(err => console.error(err));
    }, []);

    const onClickHandler = () => {
        setValues((prevState) => prevState + 5);
    };

    return (
        <section id="football-results">
            <h2 className="section-title">
                <span>
                    Football
                </span>
                Results
            </h2>

            <ul>
                {matches.slice(0, values).map(m => (
                    <li key={m.fixture.id} className="list-item">
                        <div className="league-information">
                            <div className="league-flag-container">
                                <img src={m.league.flag} alt="" />
                            </div>
                            <h3 className="league-name">
                                {m.league.country} {m.league.name}
                            </h3>
                        </div>

                        <div className="league-row">
                            <div className="match-information">
                                <div className="date">
                                    {momentLibrary(m.fixture.date)}
                                </div>

                                <div className="status" title={m.fixture.status.long}>
                                    {m.fixture.status.elapsed <= 90 && null
                                        ? m.fixture.status.elapsed
                                        : m.fixture.status.short
                                    }
                                </div>
                            </div>

                            <Link to={`/${m.fixture.id}`} className="teams">
                                <div className="home-team">
                                    <div className="home-team-name">
                                        {m.teams.home.name}
                                    </div>
                                    <div className="home-team-logo">
                                        <img src={m.teams.home.logo} alt="" />
                                    </div>
                                    <div className="home-team-result">
                                        {m.goals.home}
                                    </div>
                                </div>

                                <div className="separator">-</div>

                                <div className="away-team">
                                    <div className="away-team-result">
                                        {m.goals.away}
                                    </div>
                                    <div className="away-team-logo">
                                        <img src={m.teams.away.logo} alt="" />
                                    </div>
                                    <div className="away-team-name">
                                        {m.teams.away.name}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </li>
                ))}

                <div className="btn">
                    <button className="show-more" onClick={onClickHandler}>show more</button>
                </div>
            </ul>
        </section>
    );
};

export default FootballResults;