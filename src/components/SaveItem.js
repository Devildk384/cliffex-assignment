import React from 'react'
import "./ListItem.css"

import Checkbox from '@material-ui/core/Checkbox'

function SaveItem({name}) {


    return (
        <div className={"todoitem" }>

        <Checkbox 
        checked={true}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox"}}
            
        />

        <p>{name}</p>
      
        </div>
    )   
}

export default SaveItem