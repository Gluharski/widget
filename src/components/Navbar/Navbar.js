import { Link } from "react-router-dom";
import { AiOutlineFire } from 'react-icons/ai/index';
import { MdPlaylistPlay } from 'react-icons/md/index';

import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles['navbar-aside']}>
			<ul className={styles['navbar-list']}>
				<li className={styles['navbar-item']}>
					<Link to='/live'>
						<AiOutlineFire />
					</Link>
				</li>
				
				<li className={styles['navbar-item']}>
					<Link to='/fixtures'>
						<MdPlaylistPlay />
					</Link>
				</li>
			</ul>
		</nav>
	)
};

export default Navbar;