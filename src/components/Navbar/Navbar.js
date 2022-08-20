import { NavLink } from 'react-router-dom';
import { AiOutlineFire } from 'react-icons/ai/index';
import { AiOutlineUnorderedList } from 'react-icons/ai/index';
import { MdOutlineSpaceDashboard } from 'react-icons/md/index';

import '../../App.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <span className='navbar-icon'>
                            <MdOutlineSpaceDashboard />
                        </span>
                        {/* <span className='navbar-pathname'>
                            Dashboard
                        </span> */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/live">
                        <span className='navbar-icon'>
                            <AiOutlineFire />
                        </span>
                        {/* <span className='navbar-pathname'>
                            Live
                        </span> */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/fixtures">
                        <span className='navbar-icon'>
                            <AiOutlineUnorderedList />
                        </span>
                        {/* <span className='navbar-pathname'>
                            Fixtures
                        </span> */}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;