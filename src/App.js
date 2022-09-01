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

            <Routes>
                <Route path='/' element={<LiveMatchesList />} />
                <Route path='/fixtures' element={<FixturesMatchList />} />
                <Route path='/:matchId' element={<MatchtDetails />} />
            </Routes>
        </div >
    );
}

export default App;
