import Image from 'next/image';
import back from '/public/1234.jpg'
import { FaCheck } from "react-icons/fa"



const Particularly = () => {
    return (
        <div className='bg-gradient-to-r from-[#d7e24367] to-[#b9900a44]'>
            <div className='lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 grid grid-cols-1 p-8 gap-5 items-center'>
                <div>
                    <Image src={back}  alt=""></Image>


                </div>
                <div className=' p-5'>
                    <h4 className='text-orange-700 mb-5'>WHO ARE WE</h4>
                    <h1 className='lg:text-5xl md:text-4xl text-3xl text-[#231942] mb-5 font-extrabold'>We Are Particularly Interested In Grant Programs & Fundraising</h1>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia neque facere mollitia reprehenderit nobis quidem animi, magnam culpa! Rem, sint?</p>

                  <div className='bg-white p-5 border-l-8 mb-3 border-[#4f21db]'>
                  <h1 className='text-2xl font-bold text-[#231942] mb-2'>Great Community Impact</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, omnis!</p>
                  </div>

                 
                    <div className='mb-5'>
                    <h4 className=''><span className='mr-3'><FaCheck className='inline-flex text-[#324ce2]'/></span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque</h4>
                  <h4 className=''><span className='mr-3'><FaCheck className='inline-flex text-[#324ce2] '/></span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque</h4>
                    </div>

                  <button className='btn bg-[#2567f5] text-white'>Learn More</button>


                </div>
            </div>
            
        </div>
    );
};

export default Particularly;