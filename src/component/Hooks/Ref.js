import { useRef } from 'react'

function Ref() {
    const inputRef = useRef()

    const handleInputChange = () => {
        console.log("handleInputChange", inputRef.current.value)
    }

    const handleSubmit = () => {
        console.log("handleSubmit", inputRef.current.value)
    }
    return (
        <div>
            <h1>Ref Example</h1>
            <input type="text" ref={inputRef} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Get Value</button>
            <p>{inputRef.current.value}</p>
        </div>
    )
}

export default Ref