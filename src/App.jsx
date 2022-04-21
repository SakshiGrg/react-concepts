import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LearnReact from './components/LearnReact/LearnReact';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';

function App() {
    return (
        <div className="main">
            <Navbar />
            {/* Naigation Concept - Routing */}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<LearnReact />}></Route>
                    <Route path="/about" element={<About link="About" />}></Route>
                    <Route path="/overview" element={<Overview compname="Overview" />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
