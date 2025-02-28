import me from '../assets/me.png'
import { motion } from 'framer-motion'
import './About.css'
import { FaCheck } from "react-icons/fa";

export default function About() {
    return(
        <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center my-5 py-5">
            <div className='d-flex flex-row justify-content-center align-item-center'>
                <motion.img src={me} alt="me,myself and I image" className='me-image'
                    initial={{ opacity: 0, rotate: -2 }}
                    animate={{ opacity: 0.7, rotate: -5 }} 
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} />
            </div>
            <div className='d-flex flex-column justify-content-between align-item-center mt-5 mt-lg-0 ms-lg-2'>
            <h1 className='text-orange'>More About Me</h1>
            <div>
                <p>My name is <h4 className='text-orange d-inline'>Ionut Luca</h4> and I am a 
                    passionate <span className='text-green fs-lg'>Junior Software Developer</span> with 
                    experience in <span  className='text-green fs-lg'>.NET, Python</span>, and 
                    <span  className='text-green fs-lg'> JavaScript</span>. </p>
                 <p>Ever since I started coding, I have been fascinated by the power of technology 
                    to solve real-world problems and create meaningful digital experiences.</p>

                <p>In 2024, I graduated from 
                    <a href="https://www.iths.se/" target="_blank" rel="noopener noreferrer" 
                    className='text-yellow mx-2 link-to'>IT-Högskolan</a> the .NET Developer program, 
                    and have since deepened my expertise through hands-on experience and industry 
                    certifications.My journey into software development has been driven by curiosity,
                    a love for learning, and a strong desire to build scalable, efficient applications.
                    </p>
                <p>I thrive in collaborative, Agile environments where I can apply my 
                    problem-solving skills while continuously growing as a developer. 
                    Whether it is about designing a robust backend, creating seamless user 
                    interfaces, or integrating diverse components into a cohesive system, I take 
                    pride in writing clean, maintainable code that adds real value.
                    </p>
                <p>I am always on the lookout for exciting opportunities where I can apply my skills,
                     tackle new challenges, and grow within a dynamic team. </p>
               
                <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start mt-4 ps-lg-5'>                    
                        <div className='mb-sm-4'>
                        <h4 className='text-green fs-md'>Professional Strengths:</h4>
                        <div className='ms-4'>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>Problem-Solving & Analytical Thinking</p>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>Collaboration & Teamwork</p>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>Adaptability & Continuous Learning</p>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>Attention to Details & Quality Focus</p>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>Self-motivation and Initiative</p>
                        </div> 
                        </div>
                        <div className='pe-lg-4'>
                            <h4 className='text-green fs-md'>Languages:</h4>
                            <div className='ms-4'>
                                <p className='text-orange fs-md'>English: <span className='text-gray'>Fluent</span></p>
                                <p className='text-orange fs-md'>Swedish: <span className='text-gray'>Professional level</span></p>
                                <p className='text-orange fs-md'>Romanian: <span className='text-gray'>Native</span></p>
                            </div>
                        </div>                                   
                </div>
               
                <p className='mt-4'>Don&apos;t forget to check out my 
                    <a href="/work" className='text-yellow mx-2 link-to'>work experience</a>, 
                    <a href="/skills" className='text-yellow mx-2 link-to'>skills</a>, and 
                    <a href="/projects" className='text-yellow mx-2 link-to'>projects</a> if I have caught your interest!</p>
            </div>
            </div>
            
        </div>
    )
}