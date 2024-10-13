'use client'
import React from 'react';
import User from '../componet/User';



// export const getDashbord = async ()=>{
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/data`)
//   const das = res.json()
//   return das
// }



const  page =  async() => {
  // const data = await getDashbord()
  // console.log(data)

   

    return (
        
      <div>
        {/* {
            data.map(post=><User data={post} key={post._id}></User>)
        } */}

        <h1>hello world</h1>
      </div>


    );
};

export default page;