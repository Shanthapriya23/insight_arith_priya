import React from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepg from '../home/Homepg.js';
import Place_val from '../place_val/place_val';
import Mul from '../mul/Mul';
//import Nik from './components/mul/Nikhilam';
import Naveesh from '../mul/Naveesh';
import Div from '../division/Div';
import Divs from '../divs/Divs';
import Squar from '../squar/Squar';
import Squar_root from '../sqr_root/Squar_root';
import Code from '../code/Code';
import Misc from '../misc/Misc';
import Nomatch from '../Nomatch'
import Intro from '../mul/MulIntro';
import Nikhilam from '../mul/Nikhilam';
import Naveesh_moreexample from "../mul/Naveesh_moreexample";
import Urdvha from "../mul/Urdvha";
import Quick from "../mul/quickrecap";
import More from "../mul/moreexample";
import TryN from "../mul/try_nikh";
export default function App() {
    return (
        <div>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Homepg />} />
                    <Route path='/place_val' element={<Place_val />} />
                    <Route path='/mul' element={<Mul />} >
                        <Route path='/mul/MulIntro' index element={<Intro />} />
                        <Route path='/mul/MulIntro' element={<Intro />} />
                        <Route path='/mul/Nikhilam' element={<Nikhilam />} />
                        <Route path = '/mul/Urdvha' element = {<Urdvha/>}/>
                    </Route>
                    <Route path='/mul/try_nikh' element={<TryN/>}/>
                    <Route path='mul/moreexample' element={<More/>}/>
                    <Route path='/mul/Naveesh' element={<Naveesh />} />
                    <Route path = '/mul/Naveesh_moreexample' element = {<Naveesh_moreexample/>}/>
                    <Route path ='mul/quickrecap' element ={<Quick/>}/>
                    <Route path='/division' element={<Div />} />
                    <Route path='/divs' element={<Divs />} />
                    <Route path='/squar' element={<Squar />} />
                    <Route path='/squar_root' element={<Squar_root />} />
                    <Route path='/misc' element={<Misc />} />
                    <Route path='/code' element={<Code />} />
                    
                </Routes>
        

        </div>
    )
}