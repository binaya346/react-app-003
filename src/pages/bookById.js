import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from '../components/list.module.css'
import { useParams } from 'react-router-dom';

const BookById = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    const getBooks = async () => {
        try {
            const url = `${process.env.REACT_APP_API_HOST}/books/${id}`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setBook(data);
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
            </div>
            <CardGroup className={styles.cardGroup}>
                <Card className={styles.card}>
                    {book.cover_image && <Card.Img variant="top" src={`${process.env.REACT_APP_API_HOST}/uploads/${book.cover_image}`} />}
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                            <span> <b>Pages:</b> </span> {book.pages}
                            <span> <b>Price:</b> </span> {book.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default BookById;