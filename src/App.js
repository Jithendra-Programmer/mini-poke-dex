import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import PokemonDashboard from './Components/Layouts/PokemonDashboard';

function App() {
    return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon/:pokemonName" component={PokemonDashboard} />
        </Router>
    </div>
    );
}

export default App;
