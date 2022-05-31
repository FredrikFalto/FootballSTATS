import React from 'react';

import { Container } from 'react-bootstrap';

function Home() {
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

                <div className="row m-2">
                    <div className="col-lg-12 premierleague rounded"></div>
                </div>

                <div className="row m-2">
                    <div className="col-lg-12 laliga rounded"></div>
                </div>

                <div className="row m-2">
                    <div className="col-lg-12 seriea rounded"></div>
                </div>

                <div className="row m-2">
                    <div className="col-lg-12 bundesliga rounded"></div>
                </div>

                <div className="row m-2">
                    <div className="col-lg-12 liganos rounded"></div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
