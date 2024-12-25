import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="fixed overflow-auto inset-0 z-0 h-full w-full px-3 py-5 md:px-5 md:py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
            <div className="animate-fade-in">
                {/* Navigation Buttons */}
                <div className="flex justify-end text-black font-bold space-x-2 md:space-x-3 mb-3 md:mb-4">
                    <Link to="/education">
                        <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm">
                            Education
                        </button>
                    </Link>
                    <Link to="/projects">
                        <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm">
                            Projects
                        </button>
                    </Link>
                    <Link to="/technology">
                        <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm">
                            Technology
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm">
                            Contact
                        </button>
                    </Link>
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 mt-32 md:space-y-0 md:space-x-10 ">
                    {/* Profile Image */}
                    <div className="w-[180px] md:w-[250px] my-4 md:my-5 border-4 rounded-lg">
                        <img src="/portfolio.jpeg" alt="Portfolio" className="rounded-lg" />
                    </div>

                    {/* Introduction and Social Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="text-3xl md:text-5xl font-mono mb-3">
                            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent rounded-lg">
                                Hello... I'm Dhanushka Sandaruwan
                            </h1>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 md:space-x-5 my-4 animate-bounce">
                            <a href="https://www.linkedin.com/in/dhanushka-sandaruwan-149387227/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={35} className="hover:text-blue-500" />
                            </a>
                            <a href="https://github.com/DhanushkaSa/" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={35} className="hover:text-gray-500" />
                            </a>
                            <a href="https://web.facebook.com/dhanushka.sandaruwan.923519" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={35} className="hover:text-blue-700" />
                            </a>
                        </div>

                        {/* Introduction Text */}
                        <div className="max-w-xs md:max-w-4xl px-2 md:px-3 py-3">
                            <p className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent font-semibold text-sm md:text-base">
                                I’m a dedicated learner with a strong foundation in ICT, currently pursuing a Bachelor of (Hons) in Information and Communication Technology at the University of Colombo. I've gained hands-on experience with a wide range of programming languages, including Java, Python, and JavaScript, and have a solid grounding in both backend and frontend technologies. My journey has also taken me through web development essentials like HTML, CSS, JavaScript, and React along with more advanced web and Java programming concepts. Passionate about growing in the IT industry, I'm continually building my skills in software engineering and exploring new tech advancements for a future in technology and innovation.
                            </p>
                        </div>

                        <div>
                            <a href="https://drive.google.com/file/d/1uG9V8DsbxUB1R-O43RhHBS9qKcHgSwep/view"><button className="border mt-5 px-5 py-3 font-bold rounded-3xl hover:bg-white hover:text-black">Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
