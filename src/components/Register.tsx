// Register.tsx
import React from 'react';
import axios from 'axios';

interface State {
    login: string;
    password: string;
    email: string;
}

class Register extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            login: "",
            password: "",
            email: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ login: e.target.value });
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
            const response = await axios.post('/register', {
                login: this.state.login,
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Login:
                    <input type="text" value={this.state.login} onChange={this.handleLoginChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} required />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Register;
