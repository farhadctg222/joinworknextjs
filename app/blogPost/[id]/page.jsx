import { postData } from '@/app/componet/getAllData';
import React from 'react';


const page = async({params}) => {
   console.log(params.id)
   
   const post = await postData()
   const sigleBlog = post.find((data)=> data._id=== params.id)
   const {title,content, createdAt}  = sigleBlog
//    console.log(sigleBlog)
//    const { title,content,image,createAt} = sigleBlog()
   
 const generateMetadata = async({params})=>{
    const postDate = await postData()

    const eso = postDate.find((signaleData)=> signaleData._id===params.id)

    return {
        title: eso.title,
        description: eso.content
    }

 }

    
    return (
        <div className=" mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6 text-center"> <article>Recently Article</article>  </h1>
      <div className="  space-y-8">
       
            <div  className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
            <p className="text-gray-700 leading-8 text-justify text-lg text-md white-pre-line">{content}</p>
            <p className="text-sm text-gray-500 mt-4">Posted on {createdAt} </p>
          </div>
       
      </div>
      <h1 className='text-xl text-center'>See All</h1>
    </div>
    );
};

export default page;