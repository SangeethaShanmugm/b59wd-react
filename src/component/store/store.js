import { configureStore } from "@reduxjs/toolkit";
import expenditureReducer from "../redux/expSlice"

export const store = configureStore({
    //reducerName
    reducer: {
        myExpenditure: expenditureReducer
    }
})