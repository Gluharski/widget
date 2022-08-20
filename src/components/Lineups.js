import { useEffect, useState } from 'react';

import Player from "./Player";

const Lineups = ({ lineup }) => {
    const [players, setPlayers] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setPlayers(lineup);
    }, [lineup]);

    const onClickHandler = () => {
        setIsVisible(prevValue => !prevValue);
    };

    // console.log(players);
    // TODO: fetch link info for the player
    // TODO: Check for team's id

    return (
        <>
            <div className='toggle-button' onClick={onClickHandler}>
                <h6>lineups</h6>

                <div className='toggle-icon'>
                    <h6>
                        +
                    </h6>
                </div>
            </div>

            <section className=
                {isVisible
                    ? 'lineups show'
                    : 'hide'
                }>
                {players.map(x =>
                    <Player
                        team={x.team.name}
                        coach={x.coach.name}
                        startingEleven={x.startXI}
                        substitutes={x.substitutes}
                    />
                )}
            </section>
        </>
    )
};

export default Lineups;