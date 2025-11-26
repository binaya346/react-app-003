import Navbar from './navbar';
// import "./header.css";
import styles from './header.module.css';
import Button from './button';
import Input from './input';

const Header = (props) => {
    const { top, company } = props;

    return (
        <header>
            <div className={styles.topbar}>
                <div className={styles.container}>
                    <div>{top}</div>
                    <div>{company}</div>
                </div>
            </div>
            <Button type="primary">Sign up</Button>
            <Button>Sign in</Button>
            <div>
                <Input type="text" placeholder="Search..." variant="outlined" />
            </div>
            <Navbar />
        </header>
    )
}

export default Header;