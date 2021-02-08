import React from 'react'
import "./ListItem.css"

import Checkbox from '@material-ui/core/Checkbox'

import { useDispatch } from "react-redux";
import {setCheck} from "../features/itemSlice";


function ListItem({name,id,done}) {

    const dispatch = useDispatch()

    const handleCheck = () => {

        dispatch(setCheck(id))

    }

    return (
        <div className={!done? "todoitem" : "todoitem--done"}>

        <Checkbox 
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox"}}
            
        />

        <p >{name}</p>
            
        </div>
    )
}

export default ListItem
