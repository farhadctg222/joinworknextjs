import Link from 'next/link';
import React from 'react';
import { FaYoutube,FaFacebook,FaTwitter} from 'react-icons/fa6';

const Foter = () => {
    return (
        <div>
     
     <footer className="footer p-10 bg-[#000] font-bold  text-white">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <Link  href="/dashboard" className="link underline link-hover">Educational Services</Link>
    <Link href="/dashboard" className="link underline link-hover">Women and Child Protection</Link>
    <Link href="/dashboard" className="link underline link-hover">Volunteer and Community Engagement</Link>
    <Link href="/dashboard" className="link underline link-hover">Advertisement</Link>
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
    <Link href="/dashboard" className="link underline link-hover">Terms of use </Link>
    <Link href="/dashboard" className="link underline link-hover">Privacy policy </Link>
    <Link href="/dashboard" className="link underline link-hover">Cookie policy </Link>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-sky-100 text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p className='text-bold'>Join Work org. <br/>Providing reliable tech since 2024 <br />Kulshi Town Center <br/> 3rd Floor, Khulshi, Chattogram. </p>
  </aside> 
  <nav className="md:place-self-center  md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
    <Link href="https://www.youtube.com/@joinworkbd"><FaYoutube className="text-[#FF0000]  text-4xl " />   </Link>
   <Link href="https://www.facebook.com/profile.php?id=100006810542834"><FaFacebook className="text-[#1877F2]    text-4xl"  /></Link> 
    <FaTwitter className=" text-[#1DA1F2]  text-4xl"/>
  </div>
  </nav>
</footer>
            
        </div>
    );
};

export default Foter;