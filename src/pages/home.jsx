import React, { useState } from 'react';
import Axios from 'axios';

import { Button, Container } from 'react-bootstrap';

// import PremierLeague from './premierleague';

const url = 'http://localhost:4000';

function Home() {
    const [items, setItems] = useState([]);

    const getLeagues = () => {
        Axios.get(url + '/leagues')
            .then((res) => {
                const ligor = res.data.map((item) => {
                    return (
                        <div key={item._id} className="row mt-2">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <Button variant="danger" className="col-lg-12">
                                    {item.name}
                                </Button>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    );
                    // return <p key={item._id}>{item.name}</p>;
                });

                setItems(ligor);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Calls the getLeagues function to render buttons for every league in the database.
    getLeagues();

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
