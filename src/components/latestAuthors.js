import { useState, useEffect } from "react";
import styles from './latestAuthors.module.css';

const LatestAuthors = () => {
    const [authors, setAuthors] = useState([]);

    const getAuthors = async () => {
        try {
            const url = `${process.env.REACT_APP_API_HOST}/authors`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setAuthors(data.slice(0, 4));
        } catch (error) {
            console.error("Error fetching wines:", error);
        }
    }

    useEffect(() => {
        getAuthors();
    }, []);

    console.log(authors);

    return (
        <section className={styles["latest-authors"]}>
            <h2>Latest author</h2>
            <p>Explore our latest author of the month!</p>
            <div className={styles["latest-authorlist"]}>
                {authors.length > 0 && authors.map((author, index) => (
                    <div key={index} className={styles["author-item"]}>
                        {author.avatar && <img src={`${process.env.REACT_APP_API_HOST}/uploads/${author.avatar}`} alt={author.name} />}
                        <h3>{author.name}</h3>
                        <p>{author.country}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LatestAuthors;