import React from "react";

import Navigation from "../components/navigation";

function Home() {
    return (
        <div>
            <Navigation />

            <div className="container">
                <div className="row">
                    <h1 className="text-center text-danger">
                        Welcome to FootballSTATS
                    </h1>
                    <h4 className="text-center text-danger">
                        Please select a league:
                    </h4>
                </div>

                <div className="row">
                    <div className="col">
                        <button className="btn btn-success">
                            Premier League
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
