import { useState, useEffect, useRef } from "react"
import { Form, Button } from "react-bootstrap"
import Main from "../components/Main"
import InputField from "../components/InputField"
import { useNavigate } from "react-router-dom"
import { useApi } from "../contexts/ApiProvider"
import { useFlash } from "../contexts/FlashProvider"



const RegistrationPage = () => {
    const [formErrors, setFormErrors] = useState({})
    const usernameField = useRef()
    const emailField = useRef()
    const passwordField = useRef()
    const password2Field = useRef()

    const navigate = useNavigate()
    const api = useApi()

    const flash = useFlash()

    useEffect(
        () => {
            usernameField.current.focus()
        },
        []
    )

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(usernameField.current.value, emailField.current.value, passwordField.current.value)

        if (passwordField.current.value !== password2Field.current.value) {
            setFormErrors({ password2: "Password don't match" })
        } else {
            const data = await api.post(
                '/users',
                {
                    username: usernameField.current.value,
                    email: emailField.current.value,
                    password: passwordField.current.value,
                    about_me: ""
                }
            )

            if (!data.ok) {
                setFormErrors(data.body.errors.json)
            } else {
                setFormErrors({})
                flash('You have successfully registered!', 'success')
                navigate('/login')
            }
        }
    }

    return (
        <Main>
            <h1>Register</h1>

            <Form onSubmit={onSubmit}>
                <InputField name="username" label="Username" error={formErrors.username} fieldRef={usernameField} />
                <InputField name="email" label="Email address" error={formErrors.email} fieldRef={emailField} />
                <InputField name="password" label="Password" type="password" error={formErrors.password} fieldRef={passwordField} />
                <InputField name="password2" label="Repeat password " type="password" error={formErrors.password2} fieldRef={password2Field} />
                <Button variant="primary" type="submit">Register</Button>
            </Form>
        </Main>
    )

}

export default RegistrationPage
