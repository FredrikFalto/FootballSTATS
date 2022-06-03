import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
    Container,
    Form,
    FormControl,
    FloatingLabel,
    Button,
} from 'react-bootstrap';
import e from 'express';

const url = 'http://localhost:4000';
let counter = 0;

function PremierLeague() {
    const handleSubmit = async (e) => {
        e.preventDefault();
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

                    <hr />
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-lg-10 col-sm-12">
                    <h4>Add a new team</h4>
                    <Form onSubmit={handleSubmit} className="d-flex">
                        <Form.Group className="mb-3 mx-1 w-50">
                            <FloatingLabel
                                controlId="floatingName"
                                label="Name"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Matches Played"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="mp"
                                    placeholder="Matches Played"
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Draws"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="draws"
                                    Points
                                    placeholder="Draws"
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Points"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="points"
                                    placeholder="Points"
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3 mx-1 w-50">
                            <FloatingLabel
                                controlId="floatingName"
                                label="League"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="text"
                                    value={'6271386f7ada02bdf9e79c87'}
                                    id="name"
                                    placeholder="Name"
                                    disabled
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Wins"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="wins"
                                    placeholder="Wins"
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingName"
                                label="Losses"
                            >
                                <FormControl
                                    className="mb-2"
                                    type="number"
                                    id="losses"
                                    placeholder="Losses"
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

export default PremierLeague;
