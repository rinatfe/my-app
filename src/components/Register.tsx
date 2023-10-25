// Register.tsx
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'



interface State {
    username: string;
    password: string;
    email: string;
}

class Register extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: e.target.value });
    }

    handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: e.target.value });
    }

    async handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            });
            console.log(response.data);
            // handle successful registration (direct login, redirecting, etc.)
        } catch (error) {
            console.log(error);
            // handle error
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formLogin" className='mb-3'>
                    <Form.Label>Login</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.handleLoginChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    required/>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Регистрация
                </Button> 
            </Form>
        );
    }
}

export default Register;
