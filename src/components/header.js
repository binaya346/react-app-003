import Navbar from './navbar';
import styles from './header.module.css';
import Input from './bootstrap/input';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = (props) => {
    const { top, company } = props;
    const [token, setToken] = useState(localStorage.getItem("accessToken"))

    const navigate = useNavigate();

    const handleRedirectToSignin = () => {
        navigate("/login")
    }

    const handleRedirectToRegister = () => {
        navigate("/register")
    }

    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        setToken("")
    }

    return (
        <header>
            <div className={styles['logo']}>
                BookStore
            </div>

            <Navbar />

            {token && token !== "undefined" && token !== "" ?
                (
                    <div className={styles['header-right']}>
                        <div className={styles['btn-wrapper']}>
                            <Button onClick={handleLogout}>logout</Button>
                        </div>
                    </div>
                ) :
                (
                    <div className={styles['header-right']}>
                        <div className={styles['btn-wrapper']}>
                            <Button onClick={handleRedirectToSignin}>Sign In</Button>
                        </div>
                        <div className={styles['btn-wrapper']}>
                            <Button variant='light' onClick={handleRedirectToRegister}>Register</Button>
                        </div>
                    </div>
                )}
        </header>
    )
}

export default Header;