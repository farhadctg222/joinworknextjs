import back from '../assets/10.jpg'
import back1 from '../assets/11.jpg'
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { FaBookBible } from 'react-icons/fa6';

const Charity = () => {
    return (
        <div>
        <section className='lg:flex md:flex flex flex-col justify-center  mt-20 gap-5'>
                <div>

                <img src={back} alt="" />

                    
                </div>


            <div className='p-5'>


                <h4 className='uppercase text-amber-500'>Fundraisign Charity Evet</h4>
                <h1 className='lg:text-5xl md:text-4xl text-3xl text-[#110a3a] font-bold  mb-4'>Join Our Charity & Fundraising Events For Social Impacts Organization</h1>
                <button className='btn mb-4 btn-info'>See Events</button>
                <div className='lg:relative'>
                    <img src={back1} alt="" />

                </div>
                <div className='bg-white   lg:absolute lg:right-5 mb-10  lg:mt-[-300px]  '>
                <div className=" shadow-lg  lg:flex md:flex    lg:p-8 md:p-8 p-5 rounded">
                    <div className="ml-5">
                        
                    <IoCalendarNumberSharp className="text-4xl text-blue-800"/>

                    </div>
                    <div className="ml-5 ">
                    <h1 className="text-black-900 text-xl  font-bold">Monthly Routine Events</h1>
                    <p className="text-black-400 text-justify ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, consectetur.</p>
                    </div>

                </div>
                <div className=" shadow-lg lg:flex md:flex    lg:p-8 md:p-8 p-5 rounded">
                    <div className="ml-5">
                        <FaBookBible className="text-4xl text-blue-800"/>

                    </div>
                    <div className="ml-5">
                    <h1 className="text-black-900 text-xl  font-bold">Free Organization Apply</h1>
                    <p className="text-black-400 text-justify ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, consectetur.</p>
                    </div>

                </div>
                </div>
            </div>
        </section>
            
        </div>
    );
};

export default Charity;