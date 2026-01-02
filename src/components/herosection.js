import { Button } from "react-bootstrap";
import styles from './herosection.module.css';

const HeroSection = () => {
    return (
        <section className={styles["hero-section"]}>
            <div className={styles["hero-content"]}>
                <h1>Discover your next <span>favourite book</span></h1>
                <Button variant="primary">Browse Books</Button>
            </div>
        </section>
    )
};

export default HeroSection;