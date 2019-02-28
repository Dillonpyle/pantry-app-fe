import React, { Component } from 'react';

const Register = ({ handleSubmit, handleChange }) => {

    return (
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

    )
}

export default Register;