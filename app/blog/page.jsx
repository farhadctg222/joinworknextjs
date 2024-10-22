'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2';
import 'react-quill/dist/quill.snow.css'
export default function BlogPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const createdAt = useState(new Date().toISOString().slice(0,10))

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const handleContent = (e)=>{
    setContent(e)
  }
  const handleSubmit = async(e)=>{
     e.preventDefault()
    // const formData = {
    //     title,
    //     content,
    //     image,
    //     createdAt
    // }
    // console.log(formData)
    const formData = new FormData()
    formData.append('title',title)
    formData.append('content',content)
    if(image){
 formData.append('image',image)
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/post`,{
        next: {
            revalidate: 10
        },
        method : 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(formData,createdAt)
    })
    .then(respon=> respon.json())
    .then(data=> {
      console.log(data)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title:  'Successfully Done',
        showConfirmButton: false,
        timer: 1500
      });
      setTitle('')
      setContent('')
      setImage(null)
      setImagePreview(null)
    })
    
  }

  
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Content:</label>
          <ReactQuill
            value={content}
            onChange={handleContent}
            theme='snow'
            className="mb-6"
            rows="5"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          />
        </div>
        {imagePreview && (
          <div className="mb-4">
            <h4 className="text-gray-600 mb-2">Image Preview:</h4>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-auto max-w-xs rounded-lg shadow-md"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
