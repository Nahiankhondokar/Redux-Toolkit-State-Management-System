import { createSlice } from "@reduxjs/toolkit";


export const staffSlice = createSlice({
    name : "staff",
    initialState : {
        name : 'Staff Man',
        email : 'staff@gmail.com',
        photo : 'staff.png'
    },
    reducers : {
        changeName : (state, action) => {
            state.name = action.payload.name;
        },
        changeEmail : (state, action) => {
            state.email = action.payload.email;
        },
        changePhoto : (state, action) => {
            state.photo = action.payload.photo;
        }
    }
});


export const { changeName, changeEmail, changePhoto } = staffSlice.actions;
export default staffSlice.reducer;


