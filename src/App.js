import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import MatchList from './components/Fixtures/MatchList';
import LiveMatchDetails from './components/Live/LiveMatchDetails/LiveMatchDetail';
import LiveMatchesList from './components/Live/LiveMatchesList/LiveMatchesList';
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';
import Leagues from './components/Leagues/Leagues';

function App() {
    return (
        <>
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path="/live" element={<LiveMatchesList />} />
                    <Route path='/live/:matchId' element={<LiveMatchDetails />} />

                    <Route path="/fixtures" element={<MatchList />} />
                </Routes>
            </div>

        </>
    );
}

export default App;
