import Link from 'next/link';
import React from 'react';
import { FaYoutube,FaFacebook,FaTwitter} from 'react-icons/fa6';
import UpdateNotification from './UpdateNotification';

const Foter = () => {
    return (
        <div>
     
     <footer className="footer p-10 bg-[#fde047] font-bold  text-black">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <Link  href="/*" className="link underline link-hover">Educational Services</Link>
    <Link href="/*" className="link underline link-hover">Women and Child Protection</Link>
    <Link href="/*" className="link underline link-hover">Volunteer and Community Engagement</Link>
    <Link href="/*" className="link underline link-hover">Advertisement</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <Link href="/about" className="link underline link-hover">About us</Link>
    <Link href="/contact" className="link underline link-hover">Contact</Link>
    <Link href="/jobs" className="link underline link-hover">Jobs</Link>
    <Link href="/promise" className="link underline link-hover">আমাদের শপথ</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6>
    
    <Link href="/AdsRentSection" className="link underline link-hover">Advirtise With Us</Link>
    <Link href="/privacy" className="link underline link-hover">Privacy policy </Link>
    <Link href="/Inword" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 animate-bounce">In Word </Link>
  </nav>
</footer> 


        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <p>Address: Sk Mujib Road, Faruq Chamber, Agrabad, Chattogram </p>
                        <p>Phone: 01305573617</p>
                        <p>Email: joinwork222@gmail.com</p>
                    </div>
                    <div>
                        
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-r-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://www.youtube.com/@joinworkbd"><FaYoutube className="text-[#FF0000]  text-4xl " />   </Link>
   <Link href="https://www.facebook.com/share/hHvJcJJZPdfxK7p2"><FaFacebook className="text-[#1877F2]    text-4xl"  /></Link> 
    <FaTwitter className=" text-[#1DA1F2]  text-4xl"/>
               
               
              
            </div>
            <div className="text-center mt-4">
            <UpdateNotification></UpdateNotification>
                <p className="text-sm">© 2025-26 Join Work.org All Rights Reserved.</p>
            </div>
        </footer>
            
        </div>
    );
};

export default Foter;
