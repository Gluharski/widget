const MatchCard = ({ data }) => {
    console.log(data);
    return (
        <section>
            <div>
                {data.teams.home.name} {data.goals.home} - {data.goals.away} {data.teams.away.name}
            </div>
        </section>
    )
};

export default MatchCard;