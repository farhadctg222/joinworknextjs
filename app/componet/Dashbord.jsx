'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Dashbord = () => {
    const session = useSession()
    const [user, setUser] = useState([])
    console.log(session)


    useEffect(() => {
        const fetData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/data`, {
                next: {
                    revalidate: 10
                }
            })
            const newData = await response.json()
            setUser(newData)
        }
        fetData()
    }, [])


  if(session.status==='loading'){
    return <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin 
                    md:w-24 md:h-24 lg:w-32 lg:h-32 border-t-blue-500"></div>
  </div>
  }
  if(session.status==='unauthenticated'){
    return <h1 className='text-center text-2xl min-h-full'>You are not Access</h1>
  }



    const handleDelete = (id) => {
        const confime = confirm('Are You Delete')
        if (confime) {

            const delte = fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/delete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remain = user.filter(user => user._id !== id)
                    setUser(remain)
                    console.log(remain)



                })

        }
    }
    return (
        <div>
            <div className="container  overflow-x-auto mx-auto p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
                {session.data && <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
                    <table className="min-w-full w-1/4 border-collapse border-auto divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL.</th>
                                <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                                <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donation Tk</th>
                                <th scop='col' className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {user.map((user, index) => (
                                <tr key={user._id}>

                                    <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                                    <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                                    <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                                    <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.mobile}</td>
                                    <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.donationAmount}</td>
                                    <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.isDonar}</td>
                                    <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.isVolunteer}</td>
                                    <td scop='row' className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <button className="text-white btn btn-success p-2 hover:text-indigo-900">Edit</button>
                                        {session.data.user.type==='Administrative' && <button onClick={() => handleDelete(user._id)} className=" text-red-900 btn btn-success p-2  hover:text-indigo-900">Delete</button>}

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
            </div>
        </div>
    );
};

export default Dashbord;