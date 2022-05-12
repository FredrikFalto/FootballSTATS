import React from "react";

import { Button } from "react-bootstrap";

import Navigation from "../components/navigation";

function Home() {
    return (
        <div>
            <Navigation />

            <div className="container">
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
                        <button className="btn btn-danger col-lg-12">
                            Premier League
                        </button>
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
            </div>
        </div>
    );
}

export default Home;
