import { Routes, Route } from 'react-router-dom';

import LiveMatchesList from './components/LiveMatchesList/LiveMatchesList';
// import FixturesMatchList from './components/FixturesMatchList/FixturesMatchList';
import MatchtDetails from './components/MatchDetails/MatchDetails';
import Navbar from './components/Navbar/Navbar';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles['App']}>
            <nav>
                <Navbar />
            </nav>

            <Routes>
                <Route path='/' element={<LiveMatchesList />} />
                {/* <Route path='/fixtures' element={<FixturesMatchList />} /> */}
                <Route path='/:matchId' element={<MatchtDetails />} />
            </Routes>
        </div >
    );
}

export default App;
