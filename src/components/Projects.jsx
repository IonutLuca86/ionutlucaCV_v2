import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import grdb from '../assets/grdb.png'
import littlelemon from '../assets/littlelemon.png'
import './About.css'
import { useState } from "react";
import {  FaGithub  } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const images = {
    grdb: grdb,
    littlelemon: littlelemon
  };


export default function Projects() {

    const [modals, setModals] = useState({
        isOpenGRDB: false,
        isOpenLL: false
    });
    const {t} = useTranslation();
    const projects = t('projects.project',{ returnObjects: true });

    const Project = ({ name, sub_title, tech, description1, description2, github_link, image_link, alt, isOpen, setOpen }) => {
        return (
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-between align-items-start me-lg-5">
                    <h4 className="text-green">{name}</h4>
                    <h6 className="text-blue">{sub_title}</h6>
                    <div className="ms-4">
                        <p className="text-gray fs-md">
                            <FaCheck size={15} className="me-2" />
                            {tech}
                        </p>
                        <p className="text-gray fs-md">
                            <FaCheck size={15} className="me-2" />
                            {description1}
                        </p>
                        <p className="text-gray fs-md">
                            <FaCheck size={15} className="me-2" />
                            {description2}
                        </p>
                    </div>
                    <a href={github_link} target="_blank" rel="noopener noreferrer" className='text-yellow link-to'>
                        <FaGithub size={30} className="me-2" />GitHub Repo
                    </a>
                </div>
                <div>
                    <motion.img
                        src={images[image_link]} // Fix image issue
                        alt={alt}
                        className="project-img"
                        initial={{ opacity: 1, rotate: 3 }}
                        animate={{ opacity: 0.8, rotate: 6 }} 
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} 
                        onClick={() => setOpen(true)} // Fix onClick issue
                        style={{ cursor: "pointer" }}
                    />
                    {isOpen && (
                        <motion.div 
                            className="modal-overlay" 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)} 
                        >
                            <motion.img 
                                src={images[image_link]}
                                alt={`Enlarged ${alt}`}
                                className="modal-img"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    )}
                </div>
            </div>
        );
    };
    

    return(
        <div className="container d-flex flex-column justify-content-between align-items-center my-5 gap-5">
            <h2 className="text-orange">{t(projects.title)}</h2>
            {projects.map((project,index) => (
                 <Project
                 key={index}
                 name={project.name}
                 sub_title={project.sub_title}
                 tech={project.tech}
                 description1={project.description1}
                 description2={project.description2}
                 github_link={project.github_link}
                 image_link={project.image_link}
                 alt={project.alt}
                 isOpen={modals[project.isOpen]}
                 setOpen={(value) => setModals((prev) => ({ ...prev, [project.isOpen]: value }))}
             />
            ))}
            <h5 className="text-blue fs-md">{t('projects.more')}
            <a href="https://github.com/IonutLuca86" target="_blank" rel="noopener noreferrer" 
                    className='text-yellow link-to ms-3'>{t('projects.profile')}</a>
            </h5>
        </div>
    )
}