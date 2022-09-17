import { Form } from "react-bootstrap"


const InputField = (props) => {
    const name = props.name
    const label = props.label
    const type = props.type
    const placeholder = props.placeholder
    const error = props.error
    const fieldRef = props.fieldRef

    return (
        <Form.Group controlId={name} className="InputField">
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control type={type || 'text'} placeholder={placeholder} ref={fieldRef} />
            <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
    )
}
export default InputField
