import { Link } from "react-router-dom";

function Technology() {
    return (
        <div className="fixed inset-0 -z-10 overflow-auto h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
            <div className="mx-5 md:mx-32 my-5 animate-fade-in">
                <h1 className="text-3xl md:text-5xl text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent rounded-lg mb-10">
                    I Use These Technologies...
                </h1>

                {/* Responsive Grid for Technology Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
                    {/* HTML */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://www.w3schools.com/html/">
                            <img src="/html.jpg" alt="html" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* JavaScript */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://www.w3schools.com/js/DEFAULT.asp">
                            <img src="/javascript.png" alt="javascript" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* Java */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://docs.oracle.com/javase/8/docs/api/">
                            <img src="/java2.jpg" alt="java" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* C */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://www.w3schools.com/c/index.php">
                            <img src="/clogo.png" alt="C" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* MySQL */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://downloads.mysql.com/docs/mysql-tutorial-excerpt-8.0-en.a4.pdf">
                            <img src="/mysql.png" alt="mysql" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* Python */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://www.w3schools.com/python/default.asp">
                            <img src="/python.png" alt="python" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* Vite */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://v3.vitejs.dev/guide/">
                            <img src="/vite.png" alt="vite" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* API */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://www.postman.com/what-is-an-api/">
                            <img src="/API.jpg" alt="API" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* Node.js */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://nodejs.org/api/all.html">
                            <img src="/node.png" alt="node" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* Maven */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html">
                            <img src="/maven.jpg" alt="maven" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* React */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://react.dev/learn">
                            <img src="/react.jpg" alt="react" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* Spring Boot */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://docs.spring.io/spring-boot/documentation.html">
                            <img src="/springboot logo.png" alt="springboot" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://tailwindcss.com/docs/installation">
                            <img src="/tailwind.jpg" alt="tailwind" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* TypeScript */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html">
                            <img src="/typescript.jpg" alt="typescript" className="w-full h-full rounded-full" />
                        </Link>
                    </div>

                    {/* Postman */}
                    <div className="border w-[100px] md:w-[150px] border-black rounded-full p-2 hover:animate-flip">
                        <Link to="https://www.postman.com/what-is-an-api/">
                            <img src="/postman.png" alt="postman" className="w-full h-full rounded-full" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;
