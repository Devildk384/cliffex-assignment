import React , {useState} from 'react'
import "./Input.css"
import { useDispatch } from "react-redux";
import { saveItem } from '../features/itemSlice';


function Input() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addToDo = () => {
        console.log(`Adding ${input}`)

        dispatch(saveItem({
            item:input,
            done:false,
            id:Date.now()
        }))
        setInput("");
        

    }
    return (
        <div className="input">
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={addToDo} >Add</button>
            
        </div>
    )
}

export default Input
