export const dynamic = 'force-dynamic'
import React from 'react';
import './globals.css'

import { Suspense } from 'react'
import Charity from "./componet/Charity";
import JoinProgram from "./componet/JoinProgram";
import Particularly from "./componet/Particularly";
import Donation from "./componet/Donation";
import Comunity from "./componet/Comunity";
import NewSection from './componet/NewSection';
import Committee from "./componet/Committee";
import Review from './componet/Review';
import Sponser from './componet/Sponser';
import Carosel from './componet/Carosel';



export default function Home() {

  return (
    
    
    <div className="">
     {show ? (
      
      <Image src={ads} className='top-banner' alt='ads Banner'></Image>
    ):
}

      
      <div className=''>
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


      


         </Suspense>
        
         </div>
        
         



      

       
        
        
</div>
  
);
}
