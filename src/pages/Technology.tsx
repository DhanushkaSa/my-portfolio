import { Link } from "react-router-dom";


function Technology() {
    return (
        <div className=" absolute inset-0 -z-10  overflow-auto h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
            <div className="mx-32 my-5 animate-fade-in ">
                <h1 className="text-5xl text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent rounded-lg">I Use These Technologies...</h1>

                <div className="inline-flex">
                    <div className="mx-10 my-5 border w-[150px] border-black ">
                        <Link to="https://www.w3schools.com/html/"><img src="/src/assets/html.jpg" alt="html" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5 border w-[150px] border-black ">
                        <Link to="https://www.w3schools.com/js/DEFAULT.asp"><img src="/src/assets/javascript.png" alt="javascript" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5 border w-[150px] border-black ">
                        <Link to="https://docs.oracle.com/javase/8/docs/api/"><img src="/src/assets/java2.jpg" alt="java" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5 border w-[150px] border-black ">
                        <Link to="https://www.w3schools.com/c/index.php"><img src="/src/assets/clogo.png" alt="C" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5 border w-[150px] border-black ">
                        <Link to="https://downloads.mysql.com/docs/mysql-tutorial-excerpt-8.0-en.a4.pdf"><img src="/src/assets/mysql.png" alt="mysql" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>
                </div>

                <div className="inline-flex">
                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://www.w3schools.com/python/default.asp"><img src="/src/assets/python.png" alt="python" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://v3.vitejs.dev/guide/"><img src="/src/assets/vite.png" alt="vite" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://www.postman.com/what-is-an-api/"><img src="/src/assets/API.jpg" alt="API" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://nodejs.org/api/all.html"><img src="/src/assets/node.webp" alt="node" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"><img src="/src/assets/maven.jpg" alt="maven" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>
                </div>

                <div className="inline-flex">
                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://react.dev/learn"><img src="/src/assets/react.jpg" alt="react" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://docs.spring.io/spring-boot/documentation.html"><img src="/src/assets/springboot logo.png" alt="springboot" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://tailwindcss.com/docs/installation"><img src="/src/assets/tailwind.jpg" alt="tailwind" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html"><img src="/src/assets/typescript.jpg" alt="typescript" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>

                    <div className="mx-10 my-5  w-[150px]  ">
                        <Link to="https://www.postman.com/what-is-an-api/"><img src="/src/assets/postman.png" alt="postman" className="w-[150px] h-[150px] justify-center rounded-full hover:animate-flip" /></Link>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Technology;