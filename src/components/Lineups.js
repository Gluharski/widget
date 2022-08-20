import { useEffect, useState } from 'react';

import Player from "./Player";

const Lineups = ({ lineup }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(lineup);
    }, [lineup]);

    // console.log(players);
    // TODO: fetch link info for the player
    // TODO: Check for team's id

    return (
        <section className='lineups'>
            {players.map(x => <Player startingEleven={x.startXI} substitutes={x.substitutes} />)}
        </section>
    )
};

export default Lineups;