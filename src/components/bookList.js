import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from './list.module.css'
import { Link } from 'react-router-dom';

const BookList = () => {

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
            setBooks(data);
        } catch (error) {
            console.error("Error fetching wines:", error);
        }
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className={styles.bookList}>
            <div className={styles.bookListTitle}>
                <h1>Books</h1>
                <Link to="/book/create">Create Book</Link>
            </div>
            <CardGroup className={styles.cardGroup}>
                {books.length > 0 && books.map((value, index) => (
                    <Card key={index} className={styles.card}>
                        {value.cover_image && <Card.Img variant="top" src={`${process.env.REACT_APP_API_HOST}/uploads/${value.cover_image}`} />}
                        <Card.Body>
                            <Link to={`/book/${value._id}`}>
                                <Card.Title>{value.title}</Card.Title>
                            </Link>
                            <Card.Text>
                                <span> <b>Pages:</b> </span> {value.pages}
                                <span> <b>Price:</b> </span> {value.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}

            </CardGroup>
        </div>
    )
}

export default BookList;