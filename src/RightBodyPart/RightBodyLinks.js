import React from 'react'
import {NavLink} from "react-router-dom";

function RightBodyLinks(props) {
    return (
        <div className="RightBodyLinks" >
     
     <NavLink to="/">{props.name}</NavLink>
     

   </div>
    )
}

export default RightBodyLinks