import { useState, useEffect } from 'react';

const Live = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => {
                setData(response.response)
            })
            .catch(err => console.error(err));
    }, []);

    console.log(data);

    return (
        <>
            Live match component
        </>
    )
};

export default Live;