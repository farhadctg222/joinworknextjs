import React from 'react';

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



export default function Home() {
  return (
    <div className="">
     
      

      <Suspense fallback={<h1>Loading..........</h1>}>
      
        <Carosel></Carosel>
        <JoinProgram></JoinProgram>
        <Particularly></Particularly>
        <Donation></Donation>
        <Comunity></Comunity>
        <NewSection></NewSection>
        </Suspense>
         <Charity></Charity>
         <Committee></Committee>
         <Sponser></Sponser>
         <Review></Review>




       
        
        
</div>
  
  );
}
