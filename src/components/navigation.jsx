import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Dropdown,
} from 'react-bootstrap';

const url = 'http://localhost:4000';

function Navigation() {
    const [leagues, setLeagues] = useState([]);
    const [teams, setTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchOutput, setSearchOutput] = useState([]);
    const [leagueSearch, setLeagueSearch] = useState([]);

    useEffect(() => {
        Axios.get(url + '/leagues')
            .then((res) => {
                setLeagueSearch(res.data);
                const leagues = res.data.map((item) => {
                    return (
                        <Nav.Link
                            key={item._id}
                            href={item.name.replace(/\s/g, '').toLowerCase()}
                        >
                            {item.name}
                        </Nav.Link>
                    );
                });

                setLeagues(leagues);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        Axios.get(url + '/teams')
            .then((res) => {
                setTeams(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setSearchOutput([]);
        teams.filter((value) => {
            if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                setSearchOutput((searchOutput) => [...searchOutput, value]);
            }
        });
    }, [searchTerm]);

    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/" className="alert-danger">
                            FootballSTATS
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {leagues}
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                    }}
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-end">
                <Dropdown.Menu className="searchDropdown" show>
                    {searchOutput.map((item) => {
                        if (item.league === '6271386f7ada02bdf9e79c87') {
                            return (
                                <Dropdown.Item
                                    key={item._id}
                                    href="/premierleague"
                                >
                                    {item.name}
                                </Dropdown.Item>
                            );
                        } else if (item.league === '6283974465e8a8bea4c367b8') {
                            return (
                                <Dropdown.Item key={item._id} href="/laliga">
                                    {item.name}
                                </Dropdown.Item>
                            );
                        } else if (item.league === '6283975a65e8a8bea4c367ba') {
                            return (
                                <Dropdown.Item
                                    key={item._id}
                                    href="/bundesliga"
                                >
                                    {item.name}
                                </Dropdown.Item>
                            );
                        } else if (item.league === '6283977a65e8a8bea4c367be') {
                            return (
                                <Dropdown.Item key={item._id} href="/seriea">
                                    {item.name}
                                </Dropdown.Item>
                            );
                        } else if (item.league === '6283978d65e8a8bea4c367c0') {
                            return (
                                <Dropdown.Item key={item._id} href="/liganos">
                                    {item.name}
                                </Dropdown.Item>
                            );
                        }
                    })}
                </Dropdown.Menu>
            </div>
        </div>
    );
}

export default Navigation;
