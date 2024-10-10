'use client'
import React from 'react';
import {useEffect,useState} from 'react';

import { Suspense } from 'react'
import Carosel from "./componet/Carosel";
import Charity from "./componet/Charity";
import JoinProgram from "./componet/JoinProgram";
import Particularly from "./componet/Particularly";
import Donation from "./componet/Donation";
import Comunity from "./componet/Comunity";
import NewSection from './componet/NewSection';
import Committee from "./componet/Committee";
import Review from './componet/Review';
import Sponser from './componet/Sponser';
import Blog from './blog/page';



export default function Home() {
  const [show,setSho] = useState(true)
  useEffect(()=>{
    const time = setTimeout(()=>{
      setSho(false)
    },5000)
    return ()=> clearTimeout(time)
  },[])
  return (
    
    <div className="">
    {show ? (
      <h1 className='text-center text-2xl text-blue-600 mb-4'>welcome to  website</h1>
    ):
     

      (
      <Suspense fallback={<h1>Loading..........</h1>}>
      
        <Carosel></Carosel>
        <JoinProgram></JoinProgram>
        <Particularly></Particularly>
        <Donation></Donation>
        <Comunity></Comunity>
        <NewSection></NewSection>
       
         <Charity></Charity>
         <Committee></Committee>
         <Sponser></Sponser>
         <Review></Review>


         <Blog></Blog>



         </Suspense>
        )}
         



      

       
        
        
</div>
  
);
}
