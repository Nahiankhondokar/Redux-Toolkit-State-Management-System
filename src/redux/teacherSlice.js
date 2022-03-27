import { createSlice } from "@reduxjs/toolkit";


export const teacherSlice = createSlice({
    name : "teacher",
    initialState : {
        name : 'Teacher man',
        email : 'teacher@gmail.com',
        photo : 'te.png'
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

export const { changeName, changeEmail, changePhoto } = teacherSlice.actions;
export default teacherSlice.reducer;
