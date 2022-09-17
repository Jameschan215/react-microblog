import { useState, useEffect, useRef } from "react"
import Main from "../components/Main"
import { Form, Button } from "react-bootstrap"
import InputField from "../components/InputField"
import { Link } from "react-router-dom"


const LoginPage = () => {

    const [formErrors, setFormErrors] = useState({})
    const usernameField = useRef()
    const passwordField = useRef()

    useEffect(
        () => {
            usernameField.current.focus()
        },
        []
    )

    const onSubmit = (ev) => {
        ev.preventDefault()
        const username = usernameField.current.value
        const password = passwordField.current.value

        const error = {}
        if (!username) {
            error.username = 'Username must not be empty.'
        }
        if (!password) {
            error.password = 'Password must not be empty.'
        }

        setFormErrors(error)
        if (Object.keys(error).length > 0) {
            return
        }

        //  TODO: log the user in

    }

    return (
        <Main>
            <h1>Login In</h1>        
            <Form onSubmit={onSubmit}>
                <InputField name="username" label="Username or email address" error={formErrors.username} fieldRef={usernameField} />
                <InputField name="password" label="Password" type="password" error={formErrors.password} fieldRef={passwordField} />
                <Button variant="primary" type="submit">Login</Button>
            </Form>

            <hr />

            <p>
                Don&apos;t have an account? <Link to="/register">Register here</Link>!
            </p>

        </Main>

    )
}
export default LoginPage
