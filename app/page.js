

import { Suspense } from "react";
import Carosel from "./componet/Carosel";
import Charity from "./componet/Charity";
import JoinProgram from "./componet/JoinProgram";
import Particularly from "./componet/Particularly";
import Loading from "./componet/loading";
import Donation from "./componet/Donation";
import Comunity from "./componet/Comunity";
import NewSection from './componet/NewSection';



export default function Home() {
  return (
    <div className="">
      
      <Suspense fallback={<Loading></Loading>}>
        <Carosel></Carosel>
        <JoinProgram></JoinProgram>
        <Particularly></Particularly>
        <Donation></Donation>
        <Comunity></Comunity>
        <NewSection></NewSection>
         <Charity></Charity>
         </Suspense>
        
</div>
  
  );
}
