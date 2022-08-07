import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import LiveMatchesList from './components/LiveMatches/LiveMatchesList';
import MatchList from './components/MatchList/MatchList';

function App() {
    return (
        <>
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path="/live" element={<LiveMatchesList />} />
                    <Route path="/fixtures" element={<MatchList />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
