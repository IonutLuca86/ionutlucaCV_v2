
import './Home.css'
import hello_world from '../assets/hello_world-removebg-preview.png'
import resume from '../assets/IonutLuca_resume.pdf'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div className="container d-flex flex-column justify-content-between align-item-center my-5 py-5">

            <div className='d-flex flex-lg-row justify-content-center align-item-center'>             
            <h1 className="wordCarousel">
            <span className='text-white'>Hello </span>
            <div>           
                <ul className="flip5">
                    <li>World!</li>
                    <li>Recruiter!</li>
                    <li>Developer!</li>
                    <li>You!</li>
                    <li>Everyone!</li>
                </ul>
            </div>
            </h1>                     
            </div>
            <div className='d-flex flex-column flex-lg-row justify-content-between align-item-center mt-5'>
            <div className='container my-5'>
                <h3 className='text-white'>I am <span className='my_name text-orange'>Ionut Luca</span></h3>
                <h4 className='text-green fst-italic'>Junior Software Developer</h4>
                <h6>Specialized in .NET, Javascript and Python</h6>
                <br /><br />
                <h5>Looking for a skilled and motivated developer? </h5>
                <h5>Explore my skills, projects and experience and maybe we are a match! </h5>
                <br />
                <h6>Alternatively, you can  
                    <a href={resume} download={resume} className='download_resume text-yellow mx-2'> download </a>
                     my resume</h6>


            </div>
            <aside className="hello-world-aside pt-lg-5">
                <motion.img
                    src={hello_world}
                    alt="Hello World in C#, JavaScript, and Python"
                    className="hello-world-img"
                    initial={{ opacity: 1, rotate: 8 }}
                    animate={{ opacity: 0.8, rotate: 10 }} 
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} 
                />
                </aside>
            </div>


        </div>
    )
}

