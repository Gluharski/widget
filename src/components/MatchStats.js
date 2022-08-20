const MatchStats = ({ stats }) => {

    const statistics = stats.statistics;

    return (
        <section className="match-stats">
            {statistics.map(x => (
                <div className="home-team-stats">
                    {x.statistics.team.name
                        ? x.statistics.team.name
                        : 'There is no statistics for this club.'
                    } : {x.value && null}
                </div>
            ))}
        </section>
    )
}

export default MatchStats;