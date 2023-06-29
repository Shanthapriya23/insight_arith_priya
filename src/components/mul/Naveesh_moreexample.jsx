import React from "react";
import { useNavigate } from "react-router-dom";
export default function NavExample(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Examples of Naveesh method:</h1>
            <img src = "http://insight.sabarirb.org/Reading%20Materials/maths/arith/mul/images/navaex2.gif"/>
            <img style = {{'margin-left':'5px'}} src = "http://insight.sabarirb.org/Reading%20Materials/maths/arith/mul/images/navaex3.gif"/>
            <button style = {{'margin-left':'45%','border-radius':'20px','display':'block'}} onClick = {()=>navigate(-1)}>Back</button>
        </div>
    )
}