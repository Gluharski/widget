const MatchStats = ({ stats }) => {

    const statistics = stats.statistics;
    console.log(stats);

    return (
        <section className="match-stats">
            {statistics.map(x => (
                // TODO: check which teamm is home
                <div className="home-team-stats">
                    {x.statistics.team.name} : {x.value}
                </div>
            ))}
        </section>
    )
}

export default MatchStats;