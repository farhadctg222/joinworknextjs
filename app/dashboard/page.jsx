 import React from 'react';
import Dashbord from '../componet/Dashbord';


const getServerSideProps = async ()=>{


  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/data`,
                             
                            ) 
}


const gets =  async() => {
     const user = await getAllData()
     
    //console.log(user)



    return (
        <>

       <div>
       <Dashbord></Dashbord>
       </div>




 

      

<div className="container  overflow-x-auto mx-auto p-6 bg-gray-100">
       <div className="container  overflow-x-auto mx-auto p-6 bg-gray-100">
     <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
     <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
         <table className="min-w-full w-1/4 border-collapse border-auto divide-y divide-gray-200"></table>

     </div> 
        </div>

       </div>

</>


 

    );
};

export default gets;
