'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const page = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isDonor, setIsDonor] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      mobile,
      isDonor,
      donationAmount,
      isVolunteer,
      profilePicture
    }
    console.log(formData)
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/apply`,{
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(formData)
   })
   .then(res=>res.json())
   .then(data=>{
    
  
    console.log(data)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title:  'Successfully Done',
      showConfirmButton: false,
      timer: 1500
    });
  
    
   })
  }

  // Handle profile picture upload
  const handlePictureUpload = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Join Our Charity Organization
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="01305573617"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          {/* Donor Checkbox */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
                checked={isDonor}
                onChange={(e) => setIsDonor(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-700">Would you like to donate?</span>
            </label>
          </div>

          {/* Donation Amount (conditional) */}
          {isDonor && (
            <div className="mb-4">
              <label htmlFor="donationAmount" className="block text-sm font-medium text-gray-700">
                Donation Amount
              </label>
              <input
                type="number"
                id="donationAmount"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>
          )}

          {/* Volunteer Checkbox */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
                checked={isVolunteer}
                onChange={(e) => setIsVolunteer(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-700">Interested in volunteering?</span>
            </label>
          </div>

          {/* Profile Picture Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Profile Picture (optional)</label>
            <input
              type="file"
              onChange={handlePictureUpload}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:text-sm file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;