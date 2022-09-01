import { Routes, Route } from 'react-router-dom';

import './App.css';
import LiveMatchesList from './components/LiveMatchesList/LiveMatchesList';
import MatchtDetails from './components/MatchDetails/MatchDetails';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LiveMatchesList />} />
                <Route path='/:matchId' element={<MatchtDetails />} />
            </Routes>
        </div>
    );
}

export default App;
