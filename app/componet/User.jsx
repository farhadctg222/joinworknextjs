import React from 'react';




const User =  ({data}) => {
    const {name,email,mobile,isDonar,isVolunteer} = data
    
    console.log(data)

    return ( 
       
         
      <div className='flex justify-center items-center gap-4 space-between border-b-5'>
        <p>{name}</p>
        <p>{email}</p>
        <p>{mobile}</p>
        <p>{isDonar}</p>
        <p>{isVolunteer}</p>

        <button className='btn btn-success'>edite</button>
        <button className='btn btn-success'>delete</button>
      </div>
     
    
    
    )
          };

    
        
    

export default User;