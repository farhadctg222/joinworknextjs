'use client'
import React, { useEffect, useState } from 'react';


const Post = () => {
    const [posts, setPost] = useState([])
    console.log(posts)
    const lineBrek = (text,wordLimited)=>{
        const words = text.split(' ')
        if(words.length>wordLimited){
            const firsPart = words.slice(0,wordLimited).join(' ')
            const second = words.slice(wordLimited).join(' ')
            return firsPart + '\n\n' + second
        }
        return text

    }


    useEffect(() => {
        const fetData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/post`, {
                next: {
                    revalidate: 10
                }
            })
            const newData = await response.json()
            setPost(newData)
        }
        fetData()
    }, [])


    return (
        <div className=" mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6 text-center"> <article>Recently Aritcle</article>  </h1>
      <div className=" grid grid-cols-4 space-y-8">
        {posts.map((post) =>{
            <div key={post._id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h2>
            <p className="text-gray-700 text-justify text-lg text-md white-pre-line">{lineBrek(post.content, 300)}</p>
            <p className="text-sm text-gray-500 mt-4">Posted on {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        } )}
      </div>
    </div>
    );
};

export default Post;