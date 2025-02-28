import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import grdb from '../assets/grdb.png'
import littlelemon from '../assets/littlelemon.png'
import './About.css'
import { useState } from "react";
import {  FaGithub  } from "react-icons/fa";

export default function Projects() {

    const [isOpenGRDB, setIsOpenGRDB] = useState(false);
    const [isOpenLL, setIsOpenLL] = useState(false);

    return(
        <div className="container d-flex flex-column justify-content-between align-items-center my-5 gap-5">
            <h2 className="text-orange">Projects</h2>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-between align-items-start me-lg-5">
                    <h4 className="text-green">Gread Reads DataBase</h4>
                    <h6 className="text-blue">Full Stack Book Review Web Platform</h6>
                    <div className="ms-4">
                    <p className="text-gray fs-md">
                    <FaCheck size={15} className="me-2" />
                    Tech Stack: C#, .NET (Blazor and REST API), React, SQL, Docker containers.
                    </p>
                    <p className="text-gray fs-md">
                    <FaCheck size={15} className="me-2" />
                    Built a full-stack web application with a RESTful API and two user-friendly UIs: 
                    one for administrators (built with Blazor) for content and database management, 
                    and one for client interaction (built with React/JavaScript).
                    </p>
                    <p className="text-gray fs-md">
                    <FaCheck size={15} className="me-2" />
                    The app enables administrators to perform CRUD operations for managing database content. 
                    Clients can add, modify, and delete books and book reviews upon successful registration/login.
                    </p>                       
                    </div>
                    <a href="https://github.com/IonutLuca86/GreatReadsDatabase" target="_blank" rel="noopener noreferrer" 
                    className='text-yellow link-to'><FaGithub size={30} className="me-2"/>GitHub Repo</a>
                </div>
                <div>
                    <motion.img
                    src={grdb}
                    alt="GreatReadsDatabase Project preview"
                    className="project-img"
                    initial={{ opacity: 1, rotate: 3 }}
                    animate={{ opacity: 0.8, rotate: 6 }} 
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} 
                    onClick={() => setIsOpenGRDB(true)} 
                    style={{ cursor: "pointer" }}
                />
                 {isOpenGRDB && (
                    <motion.div 
                    className="modal-overlay" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpenGRDB(false)} 
                    >
                    <motion.img 
                        src={grdb}
                        alt="Enlarged GreatReadsDataBase Project Preview"
                        className="modal-img"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    </motion.div>
                    )}
                    </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-between align-items-start me-lg-5">
                    <h4 className="text-green">Little Lemon Restaurant</h4>
                    <h6 className="text-blue">Django-based Restaurant Web App</h6>
                    <div className="ms-4">
                    <p className="text-gray fs-md">
                    <FaCheck size={15} className="me-2" />
                    Tech Stack: Python, Django, MySql, HTML/CSS
                    </p>
                    <p className="text-gray fs-md">
                    <FaCheck size={15} className="me-2" />
                    Developed a web app with reservations management and menu updates.
                    </p>
                    <p className="text-gray fs-md">
                    <FaCheck size={15} className="me-2" />
                    Employees can manage bookings, update restaurant menu and clients can reserve tables or order
                    menu items.
                    </p>                       
                    </div>
                    <a href="https://github.com/IonutLuca86/littlelemon" target="_blank" rel="noopener noreferrer" 
                    className='text-yellow link-to'><FaGithub size={30} className="me-2"/>GitHub Repo</a>
                </div>
                <div>
                    <motion.img
                    src={littlelemon}
                    alt="LittleLemon Project preview"
                    className="project-img"
                    initial={{ opacity: 1, rotate: 3 }}
                    animate={{ opacity: 0.8, rotate: 6 }} 
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} 
                    onClick={() => setIsOpenLL(true)} 
                    style={{ cursor: "pointer" }}
                />
                 {isOpenLL && (
                    <motion.div 
                    className="modal-overlay" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpenLL(false)} 
                    >
                    <motion.img 
                        src={littlelemon}
                        alt="Enlarged LittleLemon Project Preview"
                        className="modal-img"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    </motion.div>
                    )}
                    </div>
            </div>
            <h5 className="text-blue fs-md">More projects available on my 
            <a href="https://github.com/IonutLuca86" target="_blank" rel="noopener noreferrer" 
                    className='text-yellow link-to ms-3'>GitHub Profile</a>
            </h5>
        </div>
    )
}