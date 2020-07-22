import React from 'react';
import LoginForm from '../../containers/FormContainer';

const Login = () => {
  return (
    <>
      <LoginForm
        title="Welcome Back!"
        subtitle="Login to continue to your account"
        email="Email"
        password="Password"
        forgotPassword="Forgot your Password?"
        signInUp="Sign In"
        getStarted
      />
    </>
  );
};

export default Login;
