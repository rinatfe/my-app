// AuthForm.tsx
import React from 'react';
import Login from './Login';
import Register from './Register';

interface State {
    isLoginForm: boolean;
}

class AuthForm extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoginForm: true,  // Login form is displayed by default
        }

        this.switchForm = this.switchForm.bind(this);
    }

    switchForm() {
        this.setState(prevState => ({ isLoginForm: !prevState.isLoginForm }));
    }

    render() {
        const form = this.state.isLoginForm ? <Login /> : <Register />;

        return (
            <div>
                <button onClick={this.switchForm}>
                    {this.state.isLoginForm ? 'Register' : 'Login'}
                </button>
                {form}
            </div>
        );
    }
}

export default AuthForm;