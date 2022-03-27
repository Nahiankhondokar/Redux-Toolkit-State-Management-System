import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import staffReducer from "./staffSlice";
import teacherReducer from "./teacherSlice";


export default configureStore({
    reducer : {
        user : userReducer,
        staff : staffReducer,
        teacher : teacherReducer
    }

});



