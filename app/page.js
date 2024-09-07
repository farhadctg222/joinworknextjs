

import { Suspense } from 'react'
import Carosel from "./componet/Carosel";
import Charity from "./componet/Charity";
import JoinProgram from "./componet/JoinProgram";
import Particularly from "./componet/Particularly";
import Donation from "./componet/Donation";
import Comunity from "./componet/Comunity";
import NewSection from './componet/NewSection';
import Committee from "./componet/Committee";



export default function Home() {
  return (
    <div className="">
      <Suspense fallback={<p>Loading...........</p>}>
      
      
        <Carosel></Carosel>
        <JoinProgram></JoinProgram>
        <Particularly></Particularly>
        <Donation></Donation>
        <Comunity></Comunity>
        <NewSection></NewSection>
         <Charity></Charity>
         <Committee></Committee>
         </Suspense>
        
        
</div>
  
  );
}
