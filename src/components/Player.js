const Player = ({ startingEleven, substitutes, team, coach }) => {

    // Sometimes player object hasn't pos and grid and they are set to null 
    // Always players obejct has id, name and number

    return (
        <section className="players">
            <h3>{team}:</h3>

            {startingEleven.map(x => (
                <div className="player-info">
                    <div className="coach">
                    </div>
                    <div className="player-number">
                        {x.player.number}
                    </div>
                    <div className="player-name">
                        {x.player.name}
                    </div>
                </div>
            ))}

            <h3>Subtitues:</h3>
            {substitutes.map(x =>
                <div>
                    {x.player.number}. {x.player.name}
                </div>
            )}

            <h3>
                Coach: {coach}
            </h3>

        </section>
    )
}

export default Player;