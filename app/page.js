

import { Suspense } from "react";
import Carosel from "./componet/Carosel";
import Charity from "./componet/Charity";
import JoinProgram from "./componet/JoinProgram";
import Particularly from "./componet/Particularly";
import Loading from "./componet/loading";



export default function Home() {
  return (
    <div className="">
      
      <Suspense fallback={<Loading></Loading>}>
        <Carosel></Carosel>
        <JoinProgram></JoinProgram>
        <Particularly></Particularly>
         <Charity></Charity>
         </Suspense>
        
</div>
  
  );
}
