
import    './Donation.css'

const Donation = () => {

   
    return (
        <div  className='h-96 mb-10 background mt-10 '>
            {/* <img src={background} alt="" className='object-cover object-bottom-top h-96 w-full ' /> */}
          <div className='h-96  flex flex-col justify-center items-center lg:p-20 md:p-20  bg-[#07070765] '>
              
               <h1 className='mb-5 text-center lg:text-6xl md:text-4xl text-3xl text-white font-bold'>We Have A Total Of $100,000 In Funding Available</h1>
               <button className='btn btn-primary  lg:btn-lg'>Apply Now</button>
               </div>
          
            
        </div>
    );
};

export default Donation;