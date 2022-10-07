import { Routes, Route } from 'react-router-dom';

import LiveMatchesList from './components/LiveMatchesList/LiveMatchesList';
// import FixturesMatchList from './components/FixturesMatchList/FixturesMatchList';
import MatchtDetails from './components/MatchDetails/MatchDetails';
import Navbar from './components/Navbar/Navbar';
import Teams from './components/Teams/Teams';

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
<<<<<<< Updated upstream
                <Route path='/:matchId' element={<MatchtDetails />} />
=======
                {/* <Route path='/matchId/*' element={<Match} /> */}
                <Route path='/:matchId/' element={<MatchtDetails />} />
>>>>>>> Stashed changes
            </Routes>
        </div >
    );
}

export default App;
