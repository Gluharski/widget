import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
// import MatchtDetails from './components/MatchDetails';
import Live from './components/Live/Live';
import Fixtures from './components/Fixtures/Fixtures';
import MatchtDetails from './components/MatchDetails';
import Info from './components/Info/Info';
import Summary from './components/Summary/Summary';
import Head2Head from './components/Head2Head/Head2Head';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Navbar />

            <Routes>
                <Route path='/live' element={<Live />} />
                <Route path='/fixtures' element={<Fixtures />} />
                <Route path='/fixtures/:matchId' element={<MatchtDetails />} />
                <Route path='/fixtures/:matchId/info' element={<Info />} />
                <Route path='/fixtures/:matchId/summary' element={<Summary />} />
                <Route path='/fixtures/:matchId/head2head' element={<Head2Head />} />
            </Routes>
        </div>
    );
}

export default App;
