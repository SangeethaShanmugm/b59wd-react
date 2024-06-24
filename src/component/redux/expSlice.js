import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenditure: []
}


const expSlice = createSlice({
    name: "expenditure",
    initialState,
    reducers: {
        //actions
        addExp: (state, action) => {
            // type => action type, value => payload(value)
            let newData = state.expenditure.push({ id: Date.now(), category: action.payload })
            console.log(newData)
            console.log("action", action)
        },
        deleteExp: (state, action) => {
            state.expenditure = state.expenditure.filter((expend) => {
                console.log(expend.id)
                return expend.id !== action.payload
            })
            console.log("Payload id", action.payload)
        }
    }
})

export const { addExp, deleteExp } = expSlice.actions

export default expSlice.reducer