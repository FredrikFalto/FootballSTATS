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

function LaLiga() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [mp, setMp] = useState('');
    const [wins, setWins] = useState('');
    const [draws, setDraws] = useState('');
    const [losses, setLosses] = useState('');
    const [points, setPoints] = useState('');

    // Function for loading a teams information to the textboxes
    const editTeam = async (item) => {
        setId(item._id);
        setName(item.name);
        setMp(item.mp);
        setWins(item.wins);
        setDraws(item.draws);
        setLosses(item.losses);
        setPoints(item.points);
    };

    // Function for editing a team
    const updateTeam = async () => {
        try {
            const res = await Axios.put(url + '/teams/' + id, {
                name: name,
                league: '6283974465e8a8bea4c367b8',
                mp: mp,
                wins: wins,
                draws: draws,
                losses: losses,
                points: points,
            });

            alert('Team updated.');
        } catch (error) {
            console.log(error.response);
        }

        // Reload window after edit
        window.location.reload(false);
    };

    // Function for deleting a team
    const deleteTeam = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                const res = await Axios.delete(url + '/teams/' + id).then(() =>
                    alert('Team deleted from database.')
                );
            } catch (error) {
                console.log(error);
            }

            // Reload window after delete
            window.location.reload(false);
        }
    };

    // Function for creating a new team
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await Axios.post(url + '/teams', {
                name: name,
                league: '6283974465e8a8bea4c367b8',
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

    // Load teams and create the table when the page loads
    useEffect(() => {
        Axios.get(url + '/teams')
            .then((res) => {
                const teams = res.data
                    // Sort function to put the team with the most points in the top of the table
                    .sort((a, b) => (a.points > b.points ? -1 : 1))
                    .map((item) => {
                        if (item.league === '6283974465e8a8bea4c367b8') {
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
            <h1 className="text-danger mt-3 mb-4">La Liga</h1>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-lg-10 col-sm-12">
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
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>{items}</tbody>
                    </table>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-lg-10 col-sm-12">
                    <h4>Add a new team</h4>

                    {/* Creates a Form for adding new teams and editing already existing ones */}
                    <Form className="d-flex">
                        <Form.Group className="mb-3 mx-1 w-50">
                            <FloatingLabel
                                controlId="floatingName"
                                label="Name"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Matches Played"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    name="mp"
                                    placeholder="Matches Played"
                                    value={mp}
                                    onChange={(e) => setMp(e.target.value)}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Wins"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    name="wins"
                                    placeholder="Wins"
                                    value={wins}
                                    onChange={(e) => setWins(e.target.value)}
                                />
                            </FloatingLabel>

                            <Button
                                className="w-50 h-25"
                                variant="danger"
                                onClick={updateTeam}
                            >
                                Update
                            </Button>
                        </Form.Group>

                        <Form.Group className="mb-3 mx-1 w-50">
                            <FloatingLabel
                                controlId="floatingName"
                                label="Draws"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    name="draws"
                                    placeholder="Draws"
                                    value={draws}
                                    onChange={(e) => setDraws(e.target.value)}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Losses"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    name="losses"
                                    placeholder="Losses"
                                    value={losses}
                                    onChange={(e) => setLosses(e.target.value)}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Points"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    name="points"
                                    placeholder="Points"
                                    value={points}
                                    onChange={(e) => setPoints(e.target.value)}
                                />
                            </FloatingLabel>

                            <Button
                                className="w-50 h-25"
                                variant="danger"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-1"></div>
            </div>
        </Container>
    );
}

export default LaLiga;
