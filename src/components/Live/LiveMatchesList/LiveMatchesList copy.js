import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';


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

    console.log(liveMatches)

    const dateToLocal = (date) => {
        const utcDate = moment.utc(date).format('YYYY-MM-DD HH:mm:ss');
        // console.log(utcDate); // 2015-09-13 03:39:27

        const stillUtc = moment.utc(utcDate).toDate();
        const local = moment(stillUtc).local().format('HH:mm');

        return local;
    };

    const actionHandler = () => {
        console.log('clicked');
    };

    const renderLiveMatchesList = liveMatches.map(m =>
        <Link key={m.fixture.id} to={`/live/${m.fixture.id}`}>
            <div className='match-item'>
                <header>
                    <div className='match-flag'>
                        <img src={m.league.flag} alt={m.league.name} />
                    </div>

                    <div className='match-league'>
                        {m.league.country} {m.league.name}
                    </div>
                </header>

                <main actionHandler={actionHandler}>
                    <div className='main-brief'>
                        <div className='main-brief-game-time'>
                            {dateToLocal(m.fixture.date)}
                        </div>

                        <div className='main-brief-game-status'>
                            <span className='green-dot'></span>
                            {m.fixture.status.elapsed
                                ? m.fixture.status.elapsed
                                : m.fixture.status.short
                            }
                        </div>
                    </div>

                    <div className="main-home-team">
                        {m.teams.home.name}
                        <img src={`https://media.api-sports.io/football/teams/${m.teams.home.id}.png`} />
                    </div>

                    <div className="main-match-result">
                        {/* {m.goals.home > m.goals.away
                            ? m.teams.home.name && m.teams.goals.home
                            : m.teams.away.name && m.teams.goals.away
                        } */}

                        {m.goals.home} - {m.goals.away}
                    </div>

                    <div className="main-away-team">
                        <img src={`https://media.api-sports.io/football/teams/${m.teams.away.id}.png`} />
                        {m.teams.away.name}
                    </div>

                </main>
            </div>
        </Link>);

    return (
        <ul className='match-list'>
            {liveMatches.length > 0
                ? renderLiveMatchesList
                : 'There is no live matches yet. Please check again later.'
            }
            {/* {liveMatches.map(m => <Link key={m.fixture.id} to={`/live/${m.fixture.id}`}>
                <div className='match-item'>
                    <header>
                        <div className='match-flag'>
                            <img src={m.league.flag} alt={m.league.name} />
                        </div>

                        <div className='match-league'>
                            {m.league.country}

                            <div className="match-round">
                                {m.league.name}
                            </div>
                        </div>
                    </header>

                    <main>
                        <div className="main-home-team">
                            {m.teams.home.name}
                        </div>

                        <div className="main-match-result">
                            {m.goals.home}:{m.goals.away}
                        </div>

                        <div className="main-away-team">
                            {m.teams.away.name}
                        </div>
                    </main>
                </div>


            </Link>)} */}
        </ul>
    )
};

export default LiveMatchesList;