'use server'
import { useSession } from 'next-auth/react';
import React from 'react';
import { getDashbord } from '../api/apply/route';
import { cookies } from 'next/headers';






const  page =  async() => {
  const data = await getDashbord()
  console.log(cookies.getall())
   

    return (
        
      <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                  <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donation Tk</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                  {data.map(user => (
                      <tr key={user._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.mobile}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.donationAmount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.isDonar}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.isVolunteer}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                              <button className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  </div>


    );
};

export default page;