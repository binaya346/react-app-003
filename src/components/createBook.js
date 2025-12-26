import { useState } from 'react';
import Input from '../components/bootstrap/input'
import styles from '../pages/login.module.css';
import { Button } from 'react-bootstrap';
import Modal from './bootstrap/modal';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({ title: '', pages: 0, price: 0, cover_image: '' });
    const [error, setError] = useState("");
    const [modal, setModal] = useState(false);

    const handleChange = (e) => {
        setError("");
        if (e.target.name === 'cover_image') {
            setState({ ...state, [e.target.name]: e.target.files[0] });
        } else {
            setState({ ...state, [e.target.name]: e.target.value });
        }
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    const handleConfirmModal = () => {
        navigate("/book")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    }

    const validateForm = () => {

        if (state.title.length < 3) {
            setError("First name must be at least 3 characters");
            return false;
        }

        if (state.price <= 0) {
            setError("Price must be greater than 0");
            return false;
        }

        if (state.pages <= 0) {
            setError("Pages must be greater than 0");
            return false;
        }

        return true;
    }

    const submitForm = async () => {
        try {
            const formData = new FormData();
            formData.append('title', state.title);
            formData.append('pages', state.pages);
            formData.append('price', state.price);
            if (state.cover_image) {
                formData.append('cover_image', state.cover_image);
            }

            const url = `${process.env.REACT_APP_API_HOST}/books`
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            })
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Creation failed.");
            }
            setModal(true)

        } catch (err) {
            setError("Error: " + err.message);
        }
    }

    return (
        <div>
            <form className={styles.login}>
                <h2 className={styles["login-heading"]}>Add new Book</h2>
                <Input type="text" name="title" label="Book TItle" placeholder="Enter Book Title" onChange={handleChange} />
                <Input type="number" name="price" label="Price" placeholder="Enter Book Price" onChange={handleChange} />
                <Input type="number" name="pages" label="Pages" placeholder="Enter No of pages in book" onChange={handleChange} />
                <Input type="file" name="cover_image" label="Book Cover Image" onChange={handleChange} />
                {state.cover_image && <img src={URL.createObjectURL(state.cover_image)} alt="Cover preview" className={styles['profile-preview']} />}
                {error && <p className={styles.error}>{error}</p>}
                <Button type="submit" onClick={handleSubmit}>Create Book</Button>
                {modal && <Modal show={modal} title="Success" body="Successfully Created Book" save="View Books" onSave={handleConfirmModal} onClose={handleCloseModal} />}
            </form>
        </div>
    );
}

export default CreateBook;