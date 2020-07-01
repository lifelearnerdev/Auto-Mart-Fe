import React from 'react';
import SignupForm from '../../containers/FormContainer';

const Signup = () => {
  return (
    <>
      <SignupForm
        title="Create Account Now"
        subtitle="Fill in your details to get started"
        name="Full Name"
        email="Email"
        password="Password"
        confirmPassword="Confirm Password"
        loginLink="Login"
        alreadyAccount="Already have an account? "
        signInUp="CREATE ACCOUNT NOW"
      />
    </>
  );
};

export default Signup;
