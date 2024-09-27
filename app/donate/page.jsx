import React from "react";
import bkash from '/public/bkash.png'
import Image from "next/image";


const page = () => {
 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Donate Now</h1>
      
      <p className="text-lg text-gray-700 text-center mb-4">
        Help us make a difference by donating today!
      </p>

      {/* Mobile Wallet Icons - Responsive */}

      {/* Account Number Display */}
      <div className="flex items-center justify-center bg-blue-100 p-4 rounded-lg">
        <p className="text-lg font-bold text-blue-500">
          Visa Card: 4170 3381 2851 9337
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center space-x-4 space-y-4 sm:space-y-0 mb-6">
        <div className="flex flex-col items-center">
          <Image src={bkash} alt="bKash" className=""></Image>
          <span className="text-sm text-gray-600">bKash</span>
        </div>
        {/* <div className="flex flex-col items-center">
          <Image src={bkash} alt="Rocket" className=""></Image>
          <span className="text-sm text-gray-600">Rocket</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={bkash} alt="Nagad" className=""></Image>
          <span className="text-sm text-gray-600">Nagad</span>
        </div> */}
      </div>
      <h1 className="b-5 bg-green-600 shadow-xl">Bkash Number: 01305573617</h1>


      {/* Read Account Number Button */}
      <div className="text-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Read Account Number
        </button>
      </div>

      <p className="text-sm text-gray-600 text-center mt-4">
        Thank you for your generosity!
      </p>
    </div>
  </div>

  );
};

export default page;
