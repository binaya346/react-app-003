import { useState, useEffect } from "react";
import styles from './featuredBook.module.css';

const FeaturedBook = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const url = `${process.env.REACT_APP_API_HOST}/books`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setBooks(data.slice(0, 3));
        } catch (error) {
            console.error("Error fetching wines:", error);
        }
    }

    useEffect(() => {
        getBooks();
    }, []);

    console.log(books);

    return (
        <section className={styles["featured-book"]}>
            <h2>Featured Book</h2>
            <p>Explore our featured book of the month!</p>
            <div className={styles["featured-booklist"]}>
                {books.length > 0 && books.map((book, index) => (
                    <div key={index} className={styles["book-item"]}>
                        {book.cover_image && <img src={`${process.env.REACT_APP_API_HOST}/uploads/${book.cover_image}`} alt={book.title} />}
                        <h3>{book.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedBook;