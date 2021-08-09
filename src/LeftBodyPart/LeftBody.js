import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import LeftBodyBlock from "./LeftBodyBlock";

const LeftBody=()=>{
    
return(

<div className="LeftBody">

    <h3>Patients</h3>
    <div class="search">
    <input  id="input" placeholder="Search Patient"></input>
    
    <SearchIcon id="searchIcon"/>
    </div>
    <div >
      <LeftBodyBlock name={"SaraSmith"} date={"15 Aug 2020"} dotcolor="green1" changeColor="yes"/>
      <LeftBodyBlock name={"James Johnson"} date={"No Clearence"} dotcolor="red"/>
      <LeftBodyBlock name={"Patrice Page"} date={"19 Aug 2020"} dotcolor="green2"/>
      <LeftBodyBlock name={"Derek Diamon"} date={"21 Aug 2020"} dotcolor="green3"/>
    </div>
</div>
);


}
export default LeftBody;