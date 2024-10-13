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
import Image from 'next/image';
import ads from '/public/adsBanner.jpg'



export default function Home() {
  const [show,setSho] = useState(true)
  useEffect(()=>{
    const adInterval = setInterval(()=>{
      setSho(true)
    })
    // const hasvisited = localStorage.getItem('hasVisite')
    // if(!hasvisited){
    //   setSho(false)
    //   localStorage.setItem('hasvisited',true)
    // }
    const time = setTimeout(()=>{
      setSho(false)
    },7000);
    return ()=> clearTimeout((time)=>{
 
    },2000)
    
   return ()=> clearInterval(adInterval)
  },[])

  return (
    
    <div className="">
    {show ? (
      <Image src={ads} alt='ads Banner'></Image>
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
