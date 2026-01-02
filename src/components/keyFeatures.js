import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './keyFeatures.module.css';

const KeyFeatures = () => {
    return (
        <section className={styles["key-features"]}>
            <h2>Key Features</h2>
            <p>Discover the key features of our application!</p>
            <div className={styles["features-list"]}>
                <div className={styles["feature-item"]}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    <h3>Search & Explore</h3>
                </div>
                <div className={styles["feature-item"]}>
                    <FontAwesomeIcon icon="fa-solid fa-pencil" />
                    <h3>Create & Manage Listing</h3>
                </div>
                <div className={styles["feature-item"]}>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <h3>Rate & Review</h3>
                </div>
            </div>
        </section>
    );
}

export default KeyFeatures;