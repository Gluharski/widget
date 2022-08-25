import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const MatchtDetails = () => {
    const [opponents, setOpponents] = useState([]);
    const { matchId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${matchId}`, options)
            .then(response => response.json())
            .then(response => {
                setOpponents(response.response)
            })
            .catch(err => console.error(err));
    }, [matchId]);

    console.log(opponents);

    return (
        <section className="match-details">

        </section>
    )
};
export default MatchtDetails;