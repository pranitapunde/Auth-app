import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './assets/components/Navbar'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'

const App = () => {
    return (
        <>

            <Router>
                <Navbar />
                <Routes>
                    <Route path ='/' element={<Home/>}/>
                    <Route path ='login' element={<Login/>}/>
                    <Route path ='/register' element={<Register/>}/>
                </Routes>
                <ToastContainer/>
            </Router>

        </>
    )
}

export default App
