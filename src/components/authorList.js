import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from './list.module.css'
import { Link } from 'react-router-dom';

const AuthorList = () => {

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
            setAuthors(data);
        } catch (error) {
            console.error("Error fetching wines:", error);
        }
    }

    useEffect(() => {
        getAuthors();
    }, []);

    return (
        <div className={styles.bookList}>
            <div className={styles.bookListTitle}>
                <h1>Authors</h1>
                <Link to="/author/create">Create Author</Link>
            </div>
            <CardGroup className={styles.cardGroup}>
                {authors.length > 0 && authors.map((value, index) => (
                    <Card key={index} className={styles.card}>
                        {value.avatar && <Card.Img className={styles.cardImage} variant="top" src={`${process.env.REACT_APP_API_HOST}/uploads/${value.avatar}`} />}
                        <Card.Body>
                            <Card.Title>{value.name}</Card.Title>
                            <Card.Text>
                                <span> <b>Age:</b> </span> {value.age}
                                <span> <b>Email:</b> </span> {value.email}
                                <span> <b>Country:</b> </span> {value.country}
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                ))}

            </CardGroup>
        </div>
    )
}

export default AuthorList;