import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authservice";

const useExist = JSON.parse(localStorage.getItem("user"));


const initialState = {
    user: useExist ? useExist : null,
    isLoading: false,
    issuccess: false,
    isError: false,
    message: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.message = ""
            })

            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.issuccess = true
                state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })

            // login contication

            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.message = ""
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.issuccess = true
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })



    },
})

export default authSlice.reducer;


// register User

export const registerUser = createAsyncThunk(" REGISTER/USER ", async (formData, thunkAPI) => {
    try {

        return await authService.register(formData)
       
    } catch (error) {
        
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
        
    }
})


// Login user

 export const loginUser = createAsyncThunk (" LOGIN / USER" ,async (fromdatalog) =>{
    // console.log (fromdatalog);
     return await authService.login(fromdatalog);

} )

