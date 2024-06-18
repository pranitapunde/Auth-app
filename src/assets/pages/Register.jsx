import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authSlice';

const Register = () => {
  // Gatting Data from auth State 
  const { user, issuccess, isLoading, isError, message } = useSelector((state) => state.auth);
  //  intialZing Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  // Destructure state
  const { name, email, password, password2 } = formData;
  // form State Logic
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // From Submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error('Passwords not Match')
    }
    dispatch (registerUser(formData))
  }

  useEffect(() => {
    if (user || issuccess) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message)
    }

  }, [user, issuccess, isError, message]);

  if (isLoading) {
    return (
      <h2 className='text-center text-secoundary display-2'>Loading...</h2>
    )
  }

  return (
    <div className='loginbox'>
      <div className='container-register p-4 text-center'>
       <div className='register-login'>
       <h5 className='mb-4 text-primary fw-bold'> Register Here</h5>
       </div>
        <form onSubmit={handleSubmit} className='w-100' >
          <input type="text" name='name' placeholder='Enter name ' className='form-control rounded-0 my-2 w-100'
            value={name} onChange={handleChange} />

          <input type="email" name='email' placeholder='Enter Email ' className='form-control rounded-0 my-2 w-100'
            value={email}
            onChange={handleChange} />

          <input type="password" name='password' placeholder='Enter password ' className='form-control rounded-0 my-2 w-100'
            value={password}
            onChange={handleChange} />

          <input type="password" name='password2' placeholder='confirm password ' className='form-control rounded-0 my-2 w-100'
            value={password2}
            onChange={handleChange} />

          <button className='btn btn-sm btn-success rounded-0 w-75 my-5' >Rajister </button>
        </form>


      </div>
    </div>
  )
}

export default Register
