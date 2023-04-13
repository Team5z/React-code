import { configureStore, createSlice } from "@reduxjs/toolkit";


    const loginSlice = createSlice({
        name : 'Login',
        initialState:{
            loading: false,
            error: null
        }

    })




export default configureStore({
    reducer: {
      loginSlice : loginSlice.reducer

    }
})