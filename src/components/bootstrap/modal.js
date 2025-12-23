import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent(props) {
    const { title, body, close, save, onClose, onSave } = props;
    return (
        <div
        >
            <Modal
                show={true}
                backdrop="static"
                onHide={onClose}
            >
                <Modal.Header closeButton >
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{body}</p>
                </Modal.Body>

                <Modal.Footer>
                    {close && <Button variant="secondary" onClick={onClose}>{close}</Button>}
                    {save && <Button variant="primary" onClick={onSave}>{save}</Button>}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalComponent;