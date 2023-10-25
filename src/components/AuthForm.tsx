// AuthForm.tsx
import React from 'react';
import Login from './Login';
import Register from './Register';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button'



class AuthForm extends React.Component<{}> {
    constructor(props: {}) {
        super(props);  
    }

    render() {
        return (
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="login" title="SingIn">
                    <Login />
                </Tab>
                <Tab eventKey="register" title="Register">
                    <Register />
                </Tab>
            </Tabs>
        );
    }
}

export default AuthForm;