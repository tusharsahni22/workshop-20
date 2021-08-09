import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinks=(props)=>{
  return(

   <div className="NavLink" id={props.id}>
     
     <NavLink to="/">{props.name}</NavLink>
     

   </div>
  );


}
export default NavLinks;