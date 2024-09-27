
import './Donation.css'
import { FaArrowRight } from "react-icons/fa";
import pic1 from '/public/8.jpg'
import pic2 from '/public/78.jpg'
import pic3 from '/public/144.jpg'
import Image from 'next/image';
import Link from 'next/link';







const NewSection = () => {
    return (

        <section className=' mb-10'>
            <div className='backgroundImage h-96 mt-8 mb-8'>
                <div className='flex flex-wrap bg-gradient-to-r from-[#213d9bb2] to-[#2b1e1e71] h-full lg:flex lg:justify-around lg:items-center md:flex md:justify-around md:items-center text-2xl   justify-center items-center  '>
                    <div className='p-5'>
                        <h4 className='text-[#ffd000] text-sm'>JOIN PROGRAM</h4>
                        <h1 className='lg:text-4xl text-2xl text-center text-white font-bold'>See & Apply Our Available <br /> Join Programs</h1>

                    </div>
                    <div className='text-center'>
                        <button className='btn  btn-info text-white lg:btn md:btn '>Discover <FaArrowRight /></button>
                     

                    </div>

                </div>
            </div>
            {/* lg:grid lg:grid-cols-3   md:grid md:grid-cols-2 grid grid-cols-1  */}

            <div className=''>
            <div className='flex flex-1 flex-wrap lg:mt-[-90px] md:mt-[-90px] lg:flex md:flex  gap-4 justify-center  items-center'>
            <div className="">
                    <figure><Image src={pic1} placeholder="blur" ></Image></figure>
                    <div className=" p-10">
                       <div className=' p-5 transition duration-700 ease-in-out delay-150 hover:bg-[#261749] hover:text-white'>
                       <h2 className="card-title font-bold">Non Profit Funding</h2>
                        <p>Non-profit funding enables organizations to sustain their mission, expand services, and drive impactful community change through essential financial support</p>
    
                       </div>
                     <Link href="/NonProfite"> <h5 className='text-[#3668d6] mt-2 hover:text-[#e5f559]' >Learn More  <span className='inline-flex my-auto'><FaArrowRight/></span></h5></Link>  
                       
                    </div>
                </div>
                <div className="">
                    <figure><Image src={pic2} placeholder="blur" alt="Child Donation" ></Image></figure>
                    <div className=" p-10">
                       <div className=' p-5 transition duration-700 ease-in-out delay-150 hover:bg-[#261749] hover:text-white'>
                       <h2 className="card-title font-bold">Child Hope Funding</h2>
                        <p>Child Hope funding provides crucial support for programs that enhance children's well-being, education, and future opportunities, fostering a brighter future.</p>
    
                       </div>
                <Link href='/childHope'>         <h5 className='text-[#3668d6] mt-2 hover:text-[#e5f559]' >Learn More  <span className='inline-flex my-auto'><FaArrowRight/></span></h5></Link>  
                       
                    </div>
                </div>
                
                <div className="">
                    <figure><Image src={pic3} placeholder="blur" alt="Fundraising Gain"></Image></figure>
                  
                    <div className=" p-10">
                       <div className=' p-5 transition duration-700 ease-in-out delay-150 hover:bg-[#261749] hover:text-white'>
                       <h2 className="card-title font-bold">Fundraising Gain</h2>
                        <p>Fundraising gains provide vital resources to expand programs, support initiatives, and drive meaningful impact, ensuring continued growth and success.</p>
    
                       </div>
                        <Link href='/childHope'>    <h5 className='text-[#3668d6] mt-2 hover:text-[#e5f559]' >Learn More  <span className='inline-flex my-auto'><FaArrowRight/></span></h5>  </Link> 
                       
                    </div>
                </div>
            </div>
            </div>

            
        </section>
    );
};

export default NewSection;