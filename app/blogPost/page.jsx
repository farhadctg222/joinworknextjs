import { postData } from '@/app/componet/getAllData';
import Link from 'next/link';
import React from 'react';

const posts = await postData()




const BlogPost = async() => {
    // const formatTextWithReaMore = (text,wordLimit)=>{
    //     const words = text.split(' ')
    //     console.log(words)
    //     if(words.length>wordLimit){
    //         const firsPart = words.slice(0,wordLimit).join(' ')
    //         const remaininPart = words.slice(wordLimit).join(' ')
    //     }

    // }
   
  
       
    return (
        <div className=" mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6 text-center"> <article>Recently Article</article>  </h1>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols space-y-8">
        {posts.reverse().slice(0,4).map((post) =>(
            <div key={post._id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{(post.title)}</h2>
            <p className="text-gray-700 leading-8 text-justify text-lg text-md white-pre-line">
                



            {(() => {
                const words = post.content.split(' ')
              
                if (words.length > 60) {
                  const firstPart = words.slice(0, 30).join(' ');
                  const remainingPart = words.slice(30).join(' ');

                  return (
                    <span>
                      {firstPart}..... <br />
                      <Link className='text-red-600' href={`/blogPost/${post._id}`}>
                      Read More
                      </Link>
                    </span>
                  );
                } else {
                  return post.content;
                }
              })()}
s




                
                
                 </p>
            <p className="text-sm text-gray-500 mt-4">Posted on {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ) )}
      </div>
      <h1 className='text-xl text-center'>See All</h1>
    </div>
    );
};

export default BlogPost;