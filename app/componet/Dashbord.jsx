'use client'
import React, { useEffect, useState } from 'react';

const Dashbord = () => {
    const [user, setuser] = useState([])


    
    useEffect(()=>{
       const fetchdata = async()=>{
           try{
               const response = await  fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/data`,{
                   next:{
                    revalidate: 10
                   }
               })
               const result = await response.json()
               setuser(result)

           }catch (error){
               console.error('Error')
           }
       }
       
      fetchdata()
  

    },[])
    const handleDelete =  (id) => {
        const confime = confirm('Are You Delete')
        if (confime) {

            const delte =  fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/delete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remain = user.filter(user => user._id !== id)
                    setuser(remain)
                })

        }
    }
    return (
         <div className="container  overflow-x-auto mx-auto p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
                <table className="min-w-full w-1/4 border-collapse border-auto divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                            <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donation Tk</th>
                            <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {user.map(user => (
                            <tr key={user._id}>
                                <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                                <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                                <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.mobile}</td>
                                <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.donationAmount}</td>
                                <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.isDonar}</td>
                                <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.isVolunteer}</td>
                                <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                    <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashbord;