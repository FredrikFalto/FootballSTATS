import React from 'react';

import { Container } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Container>
                <div className="row">
                    <h1 className="text-center text-dark mt-3">
                        Welcome to FootballSTATS
                    </h1>
                    <h4 className="text-center text-dark">
                        Please select a league:
                    </h4>
                </div>

                <div className="row m-2">
                    <a href="/premierleague">
                        <div className="col-lg-12 premierleague rounded league"></div>
                    </a>
                </div>

                <div className="row m-2">
                    <a href="/laliga">
                        <div className="col-lg-12 laliga rounded league"></div>
                    </a>
                </div>

                <div className="row m-2">
                    <a href="bundesliga">
                        <div className="col-lg-12 bundesliga rounded league"></div>
                    </a>
                </div>

                <div className="row m-2">
                    <a href="/seriea">
                        <div className="col-lg-12 seriea rounded league"></div>
                    </a>
                </div>

                <div className="row m-2">
                    <a href="/liganos">
                        <div className="col-lg-12 liganos rounded league"></div>
                    </a>
                </div>
            </Container>
        </div>
    );
}

export default Home;
