import React from 'react';




const User =  ({data}) => {
    const {name,email,mobile,isDonar} = data
    
    

    return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th  className="px-6 py-3">
                   Name
                </th>
                <th  className="px-6 py-3">
                   Email
                </th>
                <th  className="px-6 py-3">
                   Mobile
                </th>
                <th  className="px-6 py-3">
                    isDonar
                </th>
                <th  className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b center dark:bg-gray-800 dark:border-gray-700">
                <th  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {name}
                </th>
                <td className="px-6 py-4">
                   {email}
                </td>
                <td className="px-6 py-4">
                  {mobile}
                </td>
                <td className="px-6 py-4">
                   {isDonar}
                </td>
                <td className="px-6 py-4">
                    <button className='btn btn-success'>edit</button>
                    <button className='btn btn-danger'>delete</button>
                </td>
            </tr>
            </tbody>
            </table>
            </div>

    
        
    );
};

export default User;