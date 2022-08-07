import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import MatchList from './components/Fixtures/MatchList';
import LiveMatchDetails from './components/Live/LiveMatchDetails/LiveMatchDetail';
import LiveMatchesList from './components/Live/LiveMatchesList/LiveMatchesList';

function App() {
    return (
        <>
            <Navbar />

            <div className="App">
                <Routes>
                    <Route path="/fixtures" element={<MatchList />} />

                    <Route path="/live" element={<LiveMatchesList />} />
                    <Route path='/live/:matchId' element={<LiveMatchDetails />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
