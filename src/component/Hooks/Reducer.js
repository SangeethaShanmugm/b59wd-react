import React, { useReducer } from 'react'

function Reducer() {

    // useReducer(() => { }, { define states })
    // action =>to be dispatched

    const [state, dispatch] = useReducer((state, action) => {
        //action Types => CRUD operations
        if (action.type === "nameUpdate") {
            return {
                ...state,
                name: action.value
            }
        }
        if (action.type === "nameDelete") {
            return {
                ...state,
                name: ""
            }
        }
        if (action.type === "updatePass") {
            return {
                ...state,
                password: action.value
            }
        }
        if (action.type === "increment") {
            return {
                ...state,
                btn: state.btn + 1
            }
        }
        if (action.type === "decrement") {
            return {
                ...state,
                btn: state.btn - 1
            }
        }
    }, {
        //define state
        name: "Jack",
        btn: 1,
        password: "12345"
    })
    return (
        <div>Reducer
            <h1>{state.name}</h1>
            <h1>{state.password}</h1>
            <h1>{state.btn}</h1>
            {/* password */}
            <input type="text" onChange={(e) => dispatch({ type: "updatePass", value: e.target.value })} />
            {/* name */}
            <button onClick={() => dispatch({ type: "nameUpdate", value: "John" })}>getValue</button>
            <button onClick={() => dispatch({ type: "nameDelete" })}>Delete Name</button>
            {/* btn */}
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        </div>
    )
}

export default Reducer