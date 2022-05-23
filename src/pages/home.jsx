import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

// import PremierLeague from './premierleague';

const url = 'http://localhost:4000';

const array = [1, 2, 3, 4, 5];

function Home() {
    // const fetchItems = async () => {
    //     const data = await fetch('http://localhost:4000/leagues');
    //     const items = await data.json();
    //     setItems(items);
    // };

    // useEffect(() => {
    //     getLeagues();
    // }, []);

    const [items, setItems] = useState([]);

    const getLeagues = () => {
        axios
            .get(url + '/leagues')
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
                console.log(array);

                const ligor = items.map(item);

                console.log(item);
            })
            .catch((err) => {
                console.log(err);
            });
    };

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

                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <Button variant="danger" className="col-lg-12">
                            Premier League
                        </Button>
                    </div>
                    <div className="col-lg-3"></div>
                </div>

                <div className="row mt-2">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <Button variant="outline-danger" className="col-lg-12">
                            La Liga
                        </Button>
                    </div>
                    <div className="col-lg-3"></div>
                </div>

                <div className="row mt-2">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <Button
                            variant="danger"
                            className="col-lg-12"
                            onClick={getLeagues}
                        >
                            Get leagues
                        </Button>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
