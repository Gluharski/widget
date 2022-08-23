import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import FootballLiveScores from './components/FootballLiveScores/FootballLiveScore';
// import FootballResults from './components/FootballResults/FootballResults';
import MatchtDetails from './components/MatchDetails';

import Fixtures from './components/Fixtures/Fixtures';

function App() {
    return (
        <div className='App'>
            <Navbar />

            <Routes>
                <Route path='/live' element={<FootballLiveScores />} />
                <Route path='/fixtures' element={<Fixtures />} />
                <Route path='/:matchId' element={<MatchtDetails />} />
            </Routes>
        </div>
    );
}

export default App;
