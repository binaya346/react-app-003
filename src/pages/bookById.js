import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from '../components/list.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/header';
import UpdateBook from '../components/updateBook';
import ModalComponent from '../components/bootstrap/modal';

const BookById = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate()

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

    const handleDelete = async () => {
        setIsDelete(false)
        try {
            const url = `${process.env.REACT_APP_API_HOST}/books/${id}`;
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error("Unable to delete");
            }
            navigate("/book")

        } catch (error) {
            setError("Unable to delete")
        }
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>
            <Header />
            <div className={styles.bookList}>
                <div className={styles.bookListTitle}>
                    <h1>Books</h1>
                    <div className={styles.action}>
                        <Button variant='danger' onClick={() => setIsDelete(true)}>Delete</Button>
                        <Button onClick={() => setIsEdit(!isEdit)}>{isEdit ? "Close Edit" : "Edit"}</Button>
                    </div>
                </div>
                <CardGroup className={styles.cardGroup}>
                    <Card className={styles.card}>
                        {book.cover_image && <Card.Img className={styles.cardImage} variant="top" src={`${process.env.REACT_APP_API_HOST}/uploads/${book.cover_image}`} />}
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                <span> <b>Pages:</b> </span> {book.pages}
                                <span> <b>Price:</b> </span> {book.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                {error && <div>{error}</div>}
                {isEdit && <UpdateBook book={book} />}
                {isDelete && <ModalComponent show={isDelete} title="Delete!" body="Are you sure want to delete ?" save="Ok" onSave={handleDelete} onClose={() => setIsDelete(false)} />}
            </div>
        </>
    )
}

export default BookById;