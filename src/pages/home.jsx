import React from "react";

import { Button, Container } from "react-bootstrap";

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
            </Container>
        </div>
    );
}

export default Home;
