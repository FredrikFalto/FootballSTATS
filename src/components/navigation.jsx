import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

const url = 'http://localhost:4000';

function Navigation() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get(url + '/leagues')
            .then((res) => {
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

                setItems(leagues);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
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
                        {items}
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        {/* <Button variant="danger">Search</Button> */}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
