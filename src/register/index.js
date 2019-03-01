import React, { Component } from 'react';

const Register = ({ handleRegister, handleSubmit, handleChange }) => {

    return (
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Username:
          <input type='text' name='username' onChange={handleChange} />
                </label>
                <label>
                    password:
          <input type='text' name='password' onChange={handleChange} />
                </label>
                <button type='submit'>Login</button>
            </form>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
          <input type='text' name='username' onChange={handleChange} />
                </label>
                <label>
                    password:
          <input type='text' name='password' onChange={handleChange} />
                </label>
                <button type='submit'>Register</button>
            </form>
        </React.Fragment>
    )
}

export default Register;