import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <ul className={styles.topbar}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inActiveLink} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inActiveLink} to="/wines">Wines</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inActiveLink} to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inActiveLink} to="/form">Form</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;