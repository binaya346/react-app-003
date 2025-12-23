import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
    const navitems = [
        { name: "Home", path: "/" },
        { name: "Books", path: "/book" },
        { name: "Authors", path: "/author" },
        { name: "Publishers", path: "/publisher" },
        { name: "Genre", path: "/genre" }
    ]
    return (
        <nav>
            <ul className={styles.topbar}>
                {navitems.map((value, index) => (
                    <li>
                        <NavLink key={index} className={({ isActive }) => isActive ? styles.activeLink : styles.inActiveLink} to={value.path}>{value.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;