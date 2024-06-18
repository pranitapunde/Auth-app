import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate();
    const logout = () => {

        localStorage.removeItem("user");
    }

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [])


    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <Link to={'/'}><span className="navbar-brand mb-0 h1 text-light">AUTH AAP</span></Link>
                    <span>
                        {
                            user ? (
                                <button className='btn btn-sm btn-danger mx-2'  onClick={logout}>Logout </button>) : (
                                <>
                                    <Link to={'/register'}>  <button className='btn btn-sm btn-success my-2 mx-2'>Register </button></Link>
                                    <Link to={"/login"}>  <button className='btn btn-sm btn-primary mx-2 '>Login </button></Link>

                                </>

                            )
                        }

                    </span>

                </div>
            </nav>



        </>
    )
}

export default Navbar

