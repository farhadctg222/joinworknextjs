'use client'
import React from 'react';

const  Login = () => {
    const handleSubmit =  (e) =>{
        e.prevenntDefauld()
        const form = e.target.form
        const email = form.value.email;
        console.log(email)

    }
    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              value='email'
              required
            ></input>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              value='password'
              required></input>
        
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div> <br />
        <button
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h21.351c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325zm-13.676 18.13h-3.185v-8.13h3.185v8.13zm-1.593-9.259c-1.014 0-1.834-.82-1.834-1.834 0-1.014.82-1.834 1.834-1.834 1.014 0 1.834.82 1.834 1.834-.001 1.014-.821 1.834-1.834 1.834zm11.269 9.259h-3.186v-4.396c0-1.048-.02-2.399-1.463-2.399-1.464 0-1.689 1.144-1.689 2.326v4.469h-3.185v-8.13h3.059v1.111h.043c.426-.807 1.462-1.656 3.009-1.656 3.219 0 3.815 2.117 3.815 4.871v4.804z"
              />
            </svg>
            Login with Facebook
          </button>
          <button
            className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M23.744 12.27c0-.855-.076-1.676-.208-2.471h-11.531v4.668h6.635c-.286 1.544-1.133 2.856-2.407 3.729v3.1h3.89c2.268-2.091 3.591-5.167 3.591-9.026zm-23.744-3.703v3.019h4.17v-3.019h-4.17zm8.655 0v3.019h3.688v-3.019h-3.688zm5.611 0v3.019h3.688v-3.019h-3.688zm-9.666 0v3.019h3.688v-3.019h-3.688zm-.546 8.342h3.172c-.317.573-.741 1.102-1.244 1.525l-2.263 2.048v-3.573c-.4-.001-.799-.076-1.172-.235v-3.771zm7.62-8.342v3.019h3.688v-3.019h-3.688zm-3.688 4.012v3.019h3.688v-3.019h-3.688zm7.855 4.33v3.019h3.688v-3.019h-3.688zm-3.688 4.012v3.019h3.688v-3.019h-3.688zm-7.621-4.33v3.019h3.688v-3.019h-3.688zm-.546 8.342h3.172c-.317.573-.741 1.102-1.244 1.525l-2.263 2.048v-3.573c-.4-.001-.799-.076-1.172-.235v-3.771zm7.62-8.342v3.019h3.688v-3.019h-3.688zm-3.688 4.012v3.019h3.688v-3.019h-3.688zm7.855 4.33v3.019h3.688v-3.019h-3.688z"
              />
            </svg>
            Login with Google
          </button>
      </div>
    </div>
       
          
          
         
  
        
       
      
      </>
    );
};

export default Login;