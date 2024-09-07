
import { FaCheck } from 'react-icons/fa';
import back from '/public/1234.jpg'
import Image from 'next/image';

const Comunity = () => {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2   grid grid-cols-1 gap-6'>


                {/* start new section */}


                <div className='md:col-span-2 lg:col-span-1'>
                    <div className='mb-4'>
                        <h4 className="text-blue-600">Who Can Apply</h4>
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Lets Know How Our Community Give Impacts</h1>
                    </div>
                    <div>
                        <p className='text-justify'>Understanding how our community's giving impacts our efforts is crucial for maximizing effectiveness and fostering engagement. Donations and grants enable us to address pressing needs, fund critical programs, and support initiatives that drive positive change. By analyzing the outcomes of our fundraising efforts, we can highlight tangible results, such as improved services, enhanced opportunities, and strengthened community ties. This not only demonstrates the value of each contribution but also builds trust and encourages continued support. Engaging with our community to share success stories and progress helps reinforce the meaningful difference their support makes, ensuring a sustainable and impactful partnership</p>
                    </div>
                    <div className='mb-5'>
                        <h4 className=''><span className='mr-3'><FaCheck className='inline-flex text-[#324ce2]' /></span> Community donations fund crucial programs and drive improvement.</h4>
                        <h4 className=''><span className='mr-3'><FaCheck className='inline-flex text-[#324ce2] ' /></span>Showcasing impact strengthens relationships and encourages continued support.</h4>


                        <button className='btn btn-lg  btn-outline hover:btn-success mt-4'>Learn More</button>
                    </div>
                </div>





                {/* end  */}


                {/* parent start */}




                <div>

                    <Image src={back} alt="" className='h-full object-cover'></Image>
                </div>

                {/* parent end */}


                {/* parent  */}
                <div>

                    <div className='hover:shadow p-5 rounded-lg mb-3 border-l-4 border-l-slate-900 '>
                        <h1 className='lg:text-4xl md:text-4xl text-2xl mb-3 font-bold text-[#000]'>Give Funding Help</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, voluptatem!</p>
                    </div>

                    <div className='hover:shadow p-5 rounded-lg mb-3 border-r-4 border-r-slate-900  '>
                        <h1 className='lg:text-4xl md:text-4xl text-2xl mb-3 font-bold text-[#000]'>Free Promotion By Us</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, voluptatem!</p>
                    </div>

                    <div className='hover:shadow p-5 rounded-lg mb-3 border-l-4 border-l-slate-900  '>
                        <h1 className='lg:text-4xl md:text-4xl text-2xl mb-3 font-bold text-[#000]'>Helping Many Peple</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, voluptatem!</p>
                    </div>

                </div>
                {/* parent end */}








            </div>

            

        </div>
    );
};

export default Comunity;