import './App.css';
import FootballLiveScores from './components/FootballLiveScores/FootballLiveScore';
import FootballResults from './components/FootballResults/FootballResults';

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}

            <FootballLiveScores />
            <FootballResults />
        </div>
    );
}

export default App;
