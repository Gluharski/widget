import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        fetch('https://api-football-v1.p.rapidapi.com/v3/countries', options)
            .then(response => response.json())
            .then(response => {
                setCountries(response.response);
            })
            .catch(err => console.error(err));

    }, []);

    return (
        <ul>
            {countries.map(x =>
                <Link to={`/countries/${x.name}`}>
                    {x.name}
                </Link>
            )}
        </ul>
    );
};

export default Countries;