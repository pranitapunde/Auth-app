import axios from "axios";

const API_URL = '/api/user/';

// register

const register = async(formData) =>{
    // console.log (formData)
    const response = await axios.post (API_URL + 'register' , formData)
    // console.log(response)
    localStorage.setItem("user", JSON.stringify(response.data ))
    return response.data;

};

const login = async (formDatalog) => {
    // console.log (formDatalog)
    const response = await axios.post(API_URL + 'login' , formDatalog)
        return response.data;
    
    }
       
const authService = {
    register,
    login,
}
export default authService;



