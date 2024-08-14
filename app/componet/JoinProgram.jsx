
import { FaEnvira } from "react-icons/fa"
import { IoMdContacts } from "react-icons/io"
import { IoSchool } from "react-icons/io5"


const JoinProgram = () => {
    return (
        <div className="mb-4">
            <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around p-5 gap-4 ">
                <div>
                    <h4 className="text-blue-600">Who Can Apply</h4>
                    <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold">Our Join Program Is Open To Registered Non-Profit Organization</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur, nobis quaerat laudantium debitis eum distinctio velit minus aspernatur nesciunt illo culpa exercitationem qui delectus quod possimus error tempore assumenda, commodi odit <br /> <br />inventore, magnam ducimus nemo officia. Mollitia, velit pariatur quo at tenetur voluptates delectus nobis exercitationem, minus, magnam nulla!</p>

                </div>
            </div>
            <div className="lg:grid lg:gap-5 md:gap-4  gap-3 lg:grid-cols-3 md:grid md:grid-cols-2  grid grid-cols-1">
                <div className="bg-[#07011b] flex  p-8 rounded">
                    <div className="">
                        <FaEnvira className="text-4xl text-white"/>

                    </div>
                    <div className="ml-5">
                    <h1 className="text-white text-xl  font-bold">Environmental Conservation</h1>
                    <p className="text-fuchsia-100 text-justify ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, consectetur.</p>
                    </div>

                </div>
                <div className=" shadow-lg flex  p-8 rounded">
                    <div className="">
                        <IoMdContacts className="text-4xl text-blue-800"/>

                    </div>
                    <div className="ml-5">
                    <h1 className="text-black-900 text-xl  font-bold">Social Justice And Equality</h1>
                    <p className="text-black-400 text-justify ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, consectetur.</p>
                    </div>

                </div>
                <div className="shadow-lg flex  p-8 rounded">
                    <div className="">
                     <IoSchool className="text-4xl text-blue-900"/>

                    </div>
                    <div className="ml-5">
                    <h1 className="text-black text-xl  font-bold">Education And Develop</h1>
                    <p className="text-black-500 text-justify ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, consectetur.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default JoinProgram;