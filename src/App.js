import { Routes, Route } from 'react-router-dom';

import './App.css';
import LiveMatchesList from './components/LiveMatchesList/LiveMatchesList';
import FixturesMatchList from './components/FixturesMatchList/FixturesMatchList';
import MatchtDetails from './components/MatchDetails/MatchDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <nav>
                <Navbar />
            </nav>

            <main>
                <Routes>
                    <Route path='/live' element={<LiveMatchesList />} />
                    <Route path='/fixtures' element={<FixturesMatchList />} />
                    <Route path='/:matchId' element={<MatchtDetails />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
