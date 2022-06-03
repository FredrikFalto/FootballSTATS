import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
    Container,
    Form,
    FormControl,
    FloatingLabel,
    Button,
} from 'react-bootstrap';

const url = 'http://localhost:4000';
let counter = 0;

function PremierLeague() {
    const [name, setName] = useState('');
    const [mp, setMp] = useState('');
    const [wins, setWins] = useState('');
    const [draws, setDraws] = useState('');
    const [losses, setLosses] = useState('');
    const [points, setPoints] = useState('');

    const editTeam = async (item) => {
        if (name == null) {
            setName(item.name);
        }
        if (mp == null) {
            setMp(item.mp);
        }
        if (wins == null) {
            setWins(item.wins);
        }
        if (draws == null) {
            setDraws(item.draws);
        }
        if (losses == null) {
            setLosses(item.losses);
        }
        if (points == null) {
            setPoints(item.points);
        }

        try {
            const res = await Axios.put(url + '/teams/' + item._id, {
                name: name,
                league: '6271386f7ada02bdf9e79c87',
                mp: mp,
                wins: wins,
                draws: draws,
                losses: losses,
                points: points,
            });
        } catch (error) {
            console.log(error.response);
        }
    };

    // const editTeam = async (id) => {
    //     try {
    //         const res = await Axios.put(url + '/teams/' + id, {
    //             name: name,
    //             // league: '6271386f7ada02bdf9e79c87',
    //             mp: mp,
    //             wins: wins,
    //             draws: draws,
    //             losses: losses,
    //             points: points,
    //         });
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    // };

    const deleteTeam = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                const res = await Axios.delete(url + '/teams/' + id).then(() =>
                    alert('Team deleted from database.')
                );
            } catch (error) {
                console.log(error);
            }

            window.location.reload(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await Axios.post(url + '/teams', {
                name: name,
                league: '6271386f7ada02bdf9e79c87',
                mp: mp,
                wins: wins,
                draws: draws,
                losses: losses,
                points: points,
            });
        } catch (error) {
            console.log(error.response);
        }

        window.location.reload(false);
    };

    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get(url + '/teams')
            .then((res) => {
                const teams = res.data
                    // Sort function to put the team with the most points in the top of the table
                    .sort((a, b) => (a.points > b.points ? -1 : 1))
                    .map((item) => {
                        if (item.league === '6271386f7ada02bdf9e79c87') {
                            counter++;

                            return (
                                <tr key={item._id}>
                                    <th scope="row">{counter}</th>
                                    <td>{item.name}</td>
                                    <td>{item.mp}</td>
                                    <td>{item.wins}</td>
                                    <td>{item.draws}</td>
                                    <td>{item.losses}</td>
                                    <td>{item.points}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger mx-lg-1"
                                            onClick={() => editTeam(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteTeam(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
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
            <h1 className="text-danger mt-3 mb-4">Premier League</h1>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-lg-10 col-sm-12">
                    <table className="table table-hover mb-4">
                        <thead>
                            <tr className="table-active">
                                <th scope="col">#</th>
                                <th scope="col">TEAM</th>
                                <th scope="col">MP</th>
                                <th scope="col">W</th>
                                <th scope="col">D</th>
                                <th scope="col">L</th>
                                <th scope="col">PTS</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>{items}</tbody>
                    </table>

                    <hr />
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-lg-10 col-sm-12">
                    <h4>Add a new team</h4>
                    <Form className="d-flex">
                        <Form.Group className="mb-3 mx-1 w-50">
                            <FloatingLabel label="Name">
                                <FormControl
                                    className="mb-2"
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FloatingLabel>

                            <FloatingLabel label="Matches Played">
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="mp"
                                    placeholder="Matches Played"
                                    value={mp}
                                    onChange={(e) => setMp(e.target.value)}
                                />
                            </FloatingLabel>

                            <FloatingLabel label="Wins">
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="wins"
                                    placeholder="Wins"
                                    value={wins}
                                    onChange={(e) => setWins(e.target.value)}
                                />
                            </FloatingLabel>

                            <Button
                                className="w-50 h-25"
                                variant="danger"
                                type="submit"
                                // onClick={updateTeam}
                            >
                                Update
                            </Button>
                        </Form.Group>

                        <Form.Group className="mb-3 mx-1 w-50">
                            <FloatingLabel label="Draws">
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="draws"
                                    placeholder="Draws"
                                    value={draws}
                                    onChange={(e) => setDraws(e.target.value)}
                                />
                            </FloatingLabel>

                            <FloatingLabel label="Losses">
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="losses"
                                    placeholder="Losses"
                                    value={losses}
                                    onChange={(e) => setLosses(e.target.value)}
                                />
                            </FloatingLabel>

                            <FloatingLabel label="Points">
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="points"
                                    placeholder="Points"
                                    value={points}
                                    onChange={(e) => setPoints(e.target.value)}
                                />
                            </FloatingLabel>

                            <Button
                                className="w-50 h-25"
                                variant="danger"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Add team
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-1"></div>
            </div>
        </Container>
    );
}

export default PremierLeague;
