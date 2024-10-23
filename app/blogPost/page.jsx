import { postData } from "../componet/getAllData";




  



const BlogPost = async() => {
  const post = await postData()

  console.log(post)
  
  
   
 
       
    return (
        <div className=" mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6 text-center"> <article>Recently Article</article>  </h1>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols space-y-8">
        {post.map((post) =>(
            <div key={post._id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h2>
<div dangerouslySetInnerHTML={{__html: `${post.content}`}}/>
            <p className="text-sm text-gray-500 mt-4">Posted on {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ) )}
      </div>
      <h1 className='text-xl text-center'>See All</h1>
    </div>
    );
};


export default BlogPost;