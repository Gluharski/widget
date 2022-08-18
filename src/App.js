import { Routes, Route } from 'react-router-dom';

import './App.css';
import FootballLiveScores from './components/FootballLiveScores/FootballLiveScore';
import FootballMatchDetails from './components/FootballMatchDetails/FootballMatchDetails';
import FootballResults from './components/FootballResults/FootballResults';

function App() {
    return (
        <div className="App">
            <FootballLiveScores />
            <FootballResults />

            <Routes>
                <Route path='/:matchId' element={<FootballMatchDetails />} />
            </Routes>
        </div>
    );
}

export default App;
