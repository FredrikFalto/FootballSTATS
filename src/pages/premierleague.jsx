import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Container } from 'react-bootstrap';

const url = 'http://localhost:4000';

function PremierLeague() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get(url + '/teams')
            .then((res) => {
                const teams = res.data
                    // Sort function to put the team with the most points in the top of the table
                    .sort((a, b) => (a.points > b.points ? -1 : 1))
                    .map((item, i) => {
                        if (item.league === '6271386f7ada02bdf9e79c87') {
                            i++;

                            return (
                                <tr key={item._id}>
                                    <th scope="row">{i}</th>
                                    <td>{item.name}</td>
                                    <td>{item.mp}</td>
                                    <td>{item.wins}</td>
                                    <td>{item.draws}</td>
                                    <td>{item.losses}</td>
                                    <td>{item.points}</td>
                                </tr>
                            );
                        }
                    });

                setItems(teams);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container className="text-center">
            <h1 className="mt-3 mb-4">Premier League</h1>
            <table className="table table-hover">
                <thead>
                    <tr className="table-active">
                        <th scope="col">#</th>
                        <th scope="col">TEAM</th>
                        <th scope="col">MP</th>
                        <th scope="col">W</th>
                        <th scope="col">D</th>
                        <th scope="col">L</th>
                        <th scope="col">PTS</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        </Container>
    );
}

export default PremierLeague;
