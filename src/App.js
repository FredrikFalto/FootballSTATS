import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Navigation from './components/navigation';
import PremierLeague from './pages/premierleague';
import LaLiga from './pages/laliga';
import Bundesliga from './pages/bundesliga';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/premierleague" element={<PremierLeague />} />
                <Route path="/laliga" element={<LaLiga />} />
                <Route path="/bundesliga" element={<Bundesliga />} />
            </Routes>
        </Router>
    );
};

export default App;
