import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ToastComponent(props) {
    const { message_body, message_header, handleClose } = props;

    return (
        <Row>
            <Toast show={true} onClose={handleClose}>
                <Toast.Header>
                    <strong className="me-auto">{message_header}</strong>
                </Toast.Header>
                <Toast.Body>{message_body}</Toast.Body>
            </Toast>
        </Row>
    );
}

export default ToastComponent;