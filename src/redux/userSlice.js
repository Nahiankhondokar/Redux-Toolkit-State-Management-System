const { createSlice } = require("@reduxjs/toolkit");



export const userSlice = createSlice({
    name : "user",
    initialState : {
        name : "Nahian Khan",
        email : "nahi@gmail.com",
        photo : "nahi.png"
    },
    reducers : {
        changeName : (state, action) => {
            state.name = action.payload.name
        },
        changeEmail : (state, action) => {
            state.email = action.payload.email
        },
        changePhoto : (state, action) => {
            state.photo = action.payload.photo
        }
    }

});


export const { changeName, changeEmail, changePhoto } = userSlice.actions;
export default userSlice.reducer;

