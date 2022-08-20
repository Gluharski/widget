import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import FootballLiveScores from './components/FootballLiveScores/FootballLiveScore';
import FootballResults from './components/FootballResults/FootballResults';
import AppStatusMessage from './components/AppStatusMessage';
import MatchtDetails from './components/MatchDetails';

function App() {
    return (
        <div className='App'>
            <Navbar />

            <Routes>
                <Route path='/' element={<AppStatusMessage />} />
                <Route path='/live' element={<FootballLiveScores />} />
                <Route path='/fixtures' element={<FootballResults />} />
                <Route path='/:matchId' element={<MatchtDetails />} />
            </Routes>
        </div>
    );
}

export default App;
