import { Link } from "react-router-dom";

function Projects() {
    return (
        <div className="absolute inset-0 -z-10 overflow-auto h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
            <div className="animate-fade-in flex flex-wrap justify-center gap-5">
                
                {/* Library Management System */}
                <div className="border-2 w-full sm:w-[400px] h-auto p-5 rounded-xl backdrop-blur-md bg-gradient-to-r from-pink-500 to-orange-500">
                    <div className="p-3">
                        <h2 className="text-xl font-bold font-sans">Library Management System</h2>
                        <p className="text-justify p-3 text-black">The system includes features like user authentication, book management, and a borrowing system, enabling both users and admins to navigate the library's resources effectively.</p>
                        <Link to="https://github.com/DhanushkaSa/LibraryManagementSystem.git">
                            <button className="mt-2 border border-white px-3 py-1 rounded-lg bg-white text-black hover:text-white hover:bg-black">Show source code</button>
                        </Link>
                    </div>
                </div>
                
                {/* Student Management System */}
                <div className="border-2 w-full sm:w-[400px] h-auto p-5 rounded-xl backdrop-blur-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className="p-3">
                        <h2 className="text-xl font-bold font-sans">Student Management System</h2>
                        <p className="text-justify p-3 text-black">This system allows administrators to manage student records, course enrollment, and grades through a user-friendly interface built with Java Swing. With MySQL as the database backbone, the system ensures secure and organized storage of essential student information.</p>
                        <Link to="https://github.com/DhanushkaSa/Student-Management-System.git">
                            <button className="mt-2 border border-white px-3 py-1 rounded-lg bg-white text-black hover:text-white hover:bg-black">Show source code</button>
                        </Link>
                    </div>
                </div>
                
                {/* Supermarket POS System (Frontend) */}
                <div className="border-2 w-full sm:w-[400px] h-auto p-5 rounded-xl backdrop-blur-md bg-gradient-to-r from-teal-400 to-blue-500">
                    <div className="p-3">
                        <h2 className="text-xl font-bold font-sans">Supermarket POS System (Frontend)</h2>
                        <p className="text-justify p-3 text-black">Developed using React, this project provides a user interface that allows users to view and manage products, categories, and potentially customer information. It’s designed with responsiveness and usability in mind to offer a smooth experience for users interacting with the supermarket’s product catalog.</p>
                        <Link to="https://github.com/DhanushkaSa/Supermarket-frontend.git">
                            <button className="mt-2 border border-white px-3 py-1 rounded-lg bg-white text-black hover:text-white hover:bg-black">Show source code</button>
                        </Link>
                    </div>
                </div>
                
                {/* Supermarket POS System (Backend) */}
                <div className="border-2 w-full sm:w-[400px] md:w-[500px] h-auto p-5 rounded-xl backdrop-blur-md bg-gradient-to-r from-teal-400 to-blue-500">
                    <div className="p-3">
                        <h2 className="text-xl font-bold font-sans">Supermarket POS System (Backend)</h2>
                        <p className="text-justify p-3 text-black">The server-side application supporting the supermarket management system, designed to handle data operations and serve responses to front-end requests. This project uses Spring Boot to build a robust RESTful API, which manages essential backend functionalities like CRUD (Create, Read, Update, Delete) operations for product inventory, categories, and customer details.</p>
                        <Link to="https://github.com/DhanushkaSa/supermarket-backend.git">
                            <button className="mt-2 border border-white px-3 py-1 rounded-lg bg-white text-black hover:text-white hover:bg-black">Show source code</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
