import Form from 'react-bootstrap/Form';

const Input = (props) => {
    const { label, type, placeholder, onChange, id, name, defaultValue } = props;
    return (
        <>
            {type === "radio" || type === "checkbox" ? (
                <Form.Check
                    type={type}
                    label={label}
                    id={id}
                    name={name}
                    onChange={onChange}
                    defaultValue={defaultValue}
                />) : (
                <Form.Group className="mb-3" controlId={id}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control type={type} name={name} placeholder={placeholder} onChange={onChange}
                        defaultValue={defaultValue} />
                </Form.Group>
            )
            }
        </>

    )
}

export default Input;