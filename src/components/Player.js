const Player = ({ startingEleven, substitutes }) => {
    console.log(startingEleven, substitutes);

    // Sometimes player object hasn't pos and grid and they are set to null 
    // Always players obejct has id, name and number

    return (
        <section className="players">
            <h3>StartingXI:</h3>
            {startingEleven.map(x => (
                <div className="player-info">
                    <div className="player-number">
                        {x.player.number}
                    </div>
                    <div className="plaery-name">
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
        </section>
    )
}

export default Player;