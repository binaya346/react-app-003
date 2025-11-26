// import "./navbar.css";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <ul className={styles.topbar}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;