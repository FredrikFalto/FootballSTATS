import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const url = 'http://localhost:4000';

function PremierLeague() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get(url + '/teams')
            .then((res) => {
                const teams = res.data.map((item) => {
                    return <p key={item._id}>{item.name}</p>;
                });

                setItems(teams);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="text-center">
            <h1>Premier League</h1>
            {items}
        </div>
    );
}

export default PremierLeague;
