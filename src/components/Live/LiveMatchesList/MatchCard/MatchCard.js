import { useState, useEffect } from 'react';

const MatchCard = ({ data, actionHandler }) => {
    const [action, setAction] = useState(false);

    return (
        <div className='match-item'>
            <div className='left-column'>
                <div className='match-flag'>
                    <img src={data.league.flag} alt={data.league.name} />
                </div>

                <div className='match-league'>
                    {data.league.country}

                    <div className="match-round">
                        {data.league.name}
                    </div>
                </div>
            </div>

            <main>
                <div className="main-home-team">
                    {data.teams.home.name}
                </div>

                <div className="main-match-result">
                    {data.goals.home}:{data.goals.away}
                </div>

                <div className="main-away-team">
                    {data.teams.away.name}
                </div>
            </main>
        </div>
    )
};


export default MatchCard;