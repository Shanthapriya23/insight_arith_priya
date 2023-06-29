import React from "react";
import "./quickrecap.css"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Quick(){
    const navigate = useNavigate();
    return(
        <div className="quick">
            <p>After reversing one of the numbers and writing it below the other number, the method essentially involves four steps  that   has to be done repeatedly. They are,</p>
            <p>1) Multiply digits that fall in the same line.</p>
            <p>2) Add the products thus obtained in the previous step. This sum is added with the carry, if any, from the previous stage.</p>
            <p>3) Write  the least significant digit of the sum in the result column. The rest of the digits form the carry for the next stage.</p>
            <p>4) Shift the reversed number to the left by one digit.Goto step 1.</p>
            <p>Repeat the above steps until all the digits in the reversed number have crossed the other number.</p>
            <p>Repeat the above steps until all the digits in the reversed number have crossed the other number.</p>
            <NavLink style={{'font-size':'40px'}} to="/mul/moreexample ">more example</NavLink>
            <button style={{'margin-left':'45%'}}onClick ={()=>navigate(-1)}>BACK</button>
        </div>
    )
}