import { NavLink } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/live">Live</NavLink>
                </li>
                <li>
                    <NavLink to="/results">Results</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;