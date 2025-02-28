 import steve from '../assets/steve-jobs.png'
 import job from '../assets/job.png'
 import './About.css'
 import { motion } from 'framer-motion'

 export default function Work() {
    return(

        <div className="container d-flex flex-column justify-content-between align-items-center align-items-lg-start my-5 py-5">
        <h2 className='text-orange align-self-center'>Work Experience 
        <motion.img src={steve} alt="steve jobs" className='ms-2 steve' 
        initial={{ opacity: 0, x: "100%" , rotate : 2}}
        animate={{ opacity: 0.5 ,x: 0 , rotate : 5}} 
        transition={{ type: "tween", duration: 1}}/>
        </h2>

        <div className='d-flex flex-column justify-content-between align-items-start my-5'>
            <h4 className='text-green'>
            <motion.img src={job} alt="job icon" className='me-2 pb-1 job' 
                initial={{ opacity: 0,}}
                animate={{ opacity: 0.7 }} 
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} />
                Full-Stack Developer <span className='text-gray fs-md'>(LIA Internship)</span></h4>
            <h5 className='text-blue'>Ahum AB <span className='text-gray fs-sm fst-italic'>Stockholm, Sweden | Apr 2024 – May 2024</span></h5>
            <h6 className='text-yellow'>Key Achievements:</h6>
            <p className='text-gray ms-4'>•	Developed a user-generated comment management system, improving data organization and visibility.</p>
            <h6 className='text-yellow'>Responsabilities:</h6>
            <p className='text-gray ms-4'>•	Implemented dynamic content display and storage logic in a .NET-based application.</p>
            <p className='text-gray ms-4'>•	Enhanced data retrieval efficiency using C#/.NET for backend and JavaScript for frontend.</p>
        </div>
        <div className='d-flex flex-column justify-content-between align-items-start my-5'>
            <h4 className='text-green'>
            <motion.img src={job} alt="job icon" className='me-2 pb-1 job' 
                initial={{ opacity: 0,}}
                animate={{ opacity: 0.7 }} 
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} />
                .NET Backend Developer <span className='text-gray fs-md'>(LIA Internship)</span></h4>
            <h5 className='text-blue'>BildHistoria Association <span className='text-gray fs-sm fst-italic'>Stockholm, Sweden | Sep 2023 – Apr 2024</span></h5>
            <h6 className='text-yellow'>Key Achievements:</h6>
            <p className='text-gray ms-4'>•	Designed an image upload and validation system handling large CSV imports, ensuring 99% data accuracy.</p>
            <p className='text-gray ms-4'>•	Developed a C# console app that automated CSV data processing, reducing manual workload by 80%.</p>
            <h6 className='text-yellow'>Responsabilities:</h6>
            <p className='text-gray ms-4'>•	Created Swagger API endpoints for image uploads and validation.</p>
            <p className='text-gray ms-4'>•	Integrated Azure Blob Storage for scalable image storage.</p>
            <p className='text-gray ms-4'>•	Built backend functionality using C#/.NET, Docker, and Azure to improve platform performance.</p>
        </div>
        <div className='d-flex flex-column justify-content-between align-items-start my-5 '>
            <h4 className='text-green'>
            <motion.img src={job} alt="job icon" className='me-2 pb-1 job' 
                initial={{ opacity: 0,}}
                animate={{ opacity: 0.7 }} 
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} />
                IT Support Technician, Machine Operator & Warehouse employee <span className='text-gray fs-md'></span></h4>
                <h5 className='text-blue'><span className='text-gray fs-sm fst-italic'>Stockholm, Sweden & Iasi,Romania | prior to Sep 2022</span></h5>
                <h6 className='text-yellow'>Key Achievements:</h6>
            <p className='text-gray ms-4'>•	Gained technical troubleshooting and customer support experience as an IT Support Technician.</p>
            <p className='text-gray ms-4'>•	Worked as a heavy machine operator, developing problem-solving skills and attention to detail in high-precision tasks.</p>
            <p className='text-gray ms-4'>• Gained hands-on experience in logistics and teamwork as a warehouse employee,
                 ensuring efficient inventory handling and order fulfillment.</p>
        </div>
        </div>

    )
 }