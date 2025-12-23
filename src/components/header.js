import Navbar from './navbar';
import styles from './header.module.css';
import Input from './bootstrap/input';
import { Button } from 'react-bootstrap';

const Header = (props) => {
    const { top, company } = props;

    return (
        <header>
            <div className={styles['logo']}>
                BookStore
            </div>

            <Navbar />

            <div className={styles['header-right']}>
                <div className={styles['btn-wrapper']}>
                    <Button>Sign In</Button>
                </div>
                <div className={styles['btn-wrapper']}>
                    <Button>Register</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;