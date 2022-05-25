import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Button, Container } from 'react-bootstrap';

const url = 'http://localhost:4000';

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get(url + '/leagues')
            .then((res) => {
                const leagues = res.data.map((item) => {
                    return (
                        <div key={item._id} className="row mt-2">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <Button
                                    variant="danger"
                                    className="col-lg-12"
                                    href={item.name
                                        .replace(/\s/g, '')
                                        .toLowerCase()}
                                >
                                    {item.name}
                                </Button>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    );
                });

                setItems(leagues);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Container>
                <div className="row">
                    <h1 className="text-center text-dark">
                        Welcome to FootballSTATS
                    </h1>
                    <h4 className="text-center text-dark">
                        Please select a league:
                    </h4>
                </div>

                {items}
            </Container>
        </div>
    );
}

export default Home;
