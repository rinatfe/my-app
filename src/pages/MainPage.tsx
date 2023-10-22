import React, { Component } from 'react';
import AuthForm from '@/components/AuthForm';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>TaskManagerApp</h1>
        <AuthForm />
      </div>
    );
  }
}

export default MainPage;
