import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/auth/adminlogin', values)
      .then(res => {
        if (res.data.loginStatus) {
          navigate('/dashboard')
        } else {
          setError(res.data.Error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-warning'></div>
        <div className='text-danger'>
          {error && error}
        </div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email:</strong></label>
            <input
              type="email"
              name='email'
              autoComplete='off'
              placeholder='Enter Email'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password:</strong></label>
            <div className='input-group'>
              <input
                value={values.password}
                type={visible ? "text" : "password"}
                name='password'
                placeholder='Enter Password'
                onChange={(e) => setValues({ ...values, password: e.target.value })}
                className='form-control rounded-0' />
              <button
                type="button"
                className='btn btn-outline-secondary'
                onClick={togglePasswordVisibility}
              >
                {visible ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
              </button>
            </div>
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
          <div className='mb-1'>
            <input type="checkbox" name="tick" id="tick" className='me-2' />
            <label htmlFor="tick">Do you Agree with terms & conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
