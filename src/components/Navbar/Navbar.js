import { NavLink } from 'react-router-dom';
// import { AiOutlineFire } from 'react-icons/ai/index';
import { BiTimer } from 'react-icons/bi/index';
import { AiOutlineUnorderedList } from 'react-icons/ai/index';
import { MdOutlineSpaceDashboard } from 'react-icons/md/index';


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
                            {/* <AiOutlineFire /> */}
                            <BiTimer />
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
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;