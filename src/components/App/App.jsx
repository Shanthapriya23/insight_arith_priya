import React from "react";
import Navbar from "../navbar/Navbar";
import {Routes,Route } from 'react-router-dom';
import Homepg from '../home/Homepg.js';
import Place_val from '../place_val/place_val';
import Mul from '../mul/Mul';
import Div from '../division/Div';
import Divs from '../divs/Divs';
import Squar from '../squar/Squar';
import Squar_root from '../sqr_root/Squar_root';
import Code from '../code/Code';
import Misc from '../misc/Misc';
import Nomatch from '../Nomatch';
import Nikilam from '../division/Nikilam';
import Urdh_div from '../division/Urdh_div';
import Intro from '../division/Intro';
import Urdh_example from "../division/Urdh_example";
import Three_digit_num from "../division/Three_digit_num";
import Div_not_9 from "../division/Div_not_9";
import Part_div_neg from "../division/Part_div_neg";
import Answer_part_div_neg from "../division/Answer_part_div_neg";
import Few_ex from "../division/Few_ex";
import There_a_way_out from "../division/There_a_way_out";
import Exercises from "../division/Exercises";
import Exercise2 from "../division/Exercise2";
import Urdh_sq from "../sqr_root/Urdh_sq";
import Mishrank from "../sqr_root/Mishrank";
import Exercise from "../sqr_root/Exercise";
import More_example from "../sqr_root/More_example";
import Urdh_sq_ex from "../sqr_root/Urdh_sq_ex";
import Ex_2 from "../sqr_root/Ex_2";


export default function App(){
    return(
        <div>
            <Navbar/>
    <Routes>
        <Route path='/' element={<Homepg/>} />
        <Route path='/place_val' element={<Place_val/>} />
        <Route path='/mul' element={<Mul/>} />
        <Route path='/division' element={<Div/>}>
            <Route index element={<Intro />} />
          <Route path='intro' element={<Intro/>}></Route>
          <Route path='nik_div' element={<Nikilam/>}></Route>
          <Route path='urdh_div' element={<Urdh_div/>}></Route>
          <Route path='/division/exercise' element={<Exercises/>}></Route>
        </Route>
        
        <Route path='/division/3_digit_num' element={<Three_digit_num/>}></Route>
        <Route path='/division/div_not_9' element={<Div_not_9/>}></Route>
      
        <Route path='/division/urdh_ex' element={<Urdh_example/>}></Route>
        <Route path='/division/part_div_neg' element={<Part_div_neg/>}/>
        
        <Route path='/division/answer_to_ques_part_div_neg' element={<Answer_part_div_neg/>}/>
        <Route path='/division/is_there_a_way_out' element={<There_a_way_out/>}/>
        <Route path='/division/few_ex' element={<Few_ex/>}/>
        <Route path='/division/ex_2' element={<Exercise2/>}/>
        
        <Route path='/divs' element={<Divs/>}/>
        <Route path='/squar' element={<Squar/>}/>

        <Route path='/squar_root' element={<Squar_root/>}>
            <Route index element={<Urdh_sq />} />
            <Route path='/squar_root/mishrank' element={<Mishrank/>}/>
            <Route path='/squar_root/urdh_sq' element={<Urdh_sq/>}/>
            <Route path='/squar_root/exercise' element={<Exercise/>}/>
            <Route path='/squar_root/more_ex' element={<More_example/>}/>
        </Route>
        <Route path='/squar_root/urdh_sq_ex' element={<Urdh_sq_ex/>}/>
        <Route path='/squar_root/exer_2' element={<Ex_2/>}/>
        <Route path='/misc' element={<Misc/>}/>
        <Route path='/code' element={<Code/>} />
        <Route path='*' element={<Nomatch/>} />
    </Routes>
        </div>
    )
}