import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import FootballLiveScores from './components/FootballLiveScores/FootballLiveScore';
import FootballMatchDetails from './components/FootballMatchDetails/FootballMatchDetails';
import FootballResults from './components/FootballResults/FootballResults';
import AppStatusMessage from './components/AppStatusMessage';

function App() {
    return (
        <div className='App'>
            <Navbar />

            <Routes>
                <Route path='/' element={<AppStatusMessage />} />
                <Route path='/fixtures' element={<FootballResults />} />
                <Route path='/live' element={<FootballLiveScores />} />
                <Route path='/:matchId' element={<FootballMatchDetails />} />
            </Routes>
        </div>
    );
}

export default App;
