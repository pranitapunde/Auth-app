import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../features/auth/authSlice';

const Login = () => {
  // Getting Data from auth state
  const { user, issuccess, isLoading, isError, message } = useSelector((state) => state.auth);

  //  intialZing Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // From Satate 
  const [fromDatalog, setFormDatalog] = useState({
    email: "",
    password: ""
  })

  // Destructure state
  const { email, password } = fromDatalog;


  // From state logic
  const handleChange = (e) => {
    setFormDatalog({
      ...fromDatalog,
      [e.target.name]: e.target.value,
    })
  }

  //  From Submission
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser(fromDatalog))

  }

  useEffect(() => {
    if (user && issuccess) {
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
      <div className='container  text-center'>
        <div className='loginheading '>
          <h5 className=' mb-5 my-5 text-primary fw-bold'> Login Here</h5>
        </div>
        <form onSubmit={handleSubmit} >
          <input type="email" name='email' placeholder='Enter Email ' className='form-control rounded-0 my-2 w-100'
            value={email}
            onChange={handleChange} />
          <input type="password" name='password' placeholder='Enter password ' className='form-control rounded-0 my-2 w-100'
            value={password}
            onChange={handleChange} />
          <button className='btn  btn-sm btn-success rounded-0  my-5 w-75'> Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login
