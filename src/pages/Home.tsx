import { FaDeaf, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


function Home() {




    return (
        <div className="absolute overflow-auto inset-0 -z-10 h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
            <div className="animate-fade-in">
                <div className="flex justify-end  text-black font-bold ">
                    <Link to="/education"><button className=" bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-2 rounded-lg mx-3 ">Education</button></Link>
                    <Link to="/projects"><button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-2 mx-3 rounded-lg">Projects</button></Link>

                    <Link to="/technology"><button className=" bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-2 rounded-lg mx-3 ">Technology</button></Link>

                    <Link to="/contact"><button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-2 rounded-lg mx-3 ">Contact</button></Link>
                </div>

                <div className="flex justify-center items-start space-x-10">




                    <div className="w-[300px] my-20 mx-3 border-4 rounded-lg " style={{ animation: 'border-pulse 5s infinite' }}>
                        <img src="/src/assets/portfolio.jpeg" alt="Portfolio" />
                    </div>


                    <div className="flex flex-col justify-center my-20" >
                        <div className="text-6xl font-mono">
                            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent rounded-lg">Hello... I'm Dhanushka Sandaruwan</h1>
                        </div>

                        <div className="inline-flex mx-72 my-3 animate-bounce  ">
                            <Link to="https://www.linkedin.com/in/dhanushka-sandaruwan-149387227/">
                                <FaLinkedin size={50} className="hover:text-blue-500  mx-3" />
                            </Link>
                            <Link to="https://github.com/DhanushkaSa/">
                                <FaGithub size={50} className="hover:text-gray-500  mx-3 " />
                            </Link>
                            <Link to="https://web.facebook.com/dhanushka.sandaruwan.923519">
                                <FaFacebook size={50} className="hover:text-blue-700 mx-3" />
                            </Link>
                        </div>

                        <div className="  w-[500px] my-5 rounded-lg text-justify p-3 mx-[200px]  ">
                            <p className="w-[700px] bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent rounded-lg font-semibold">I’m a dedicated learner with a strong foundation in ICT, currently pursuing a Bachelor of (Hons) in Information and Communication Technology at the University of Colombo. I've gained hands-on experience with a wide range of programming languages, including Java, Python, and JavaScript, and have a solid grounding in both backend and frontend technologies. My journey has also taken me through web development essentials like HTML, CSS, JavaScript and React along with more advanced web and Java programming concepts. Passionate about growing in the IT industry, I'm continually building my skills in software engineering and exploring new tech advancements for a future in technology and innovation.</p>
                        </div>


                    </div>





                </div>

            </div>



        </div>
    )
}




export default Home;

