/* eslint-disable react/prop-types */
import job from '../assets/job.png';
import './About.css';
import { motion } from 'framer-motion';
import worker from '../assets/worker.png';


const workExperiences = [
  {
    title: "Full-Stack Developer",
    type: "(LIA Internship)",
    company: "Ahum AB",
    companyLink: "https://www.ahum.se/",
    location: "Stockholm, Sweden",
    duration: "Apr 2024 – May 2024",
    achievements: [
      "Developed a user-generated comment management system, improving data organization and visibility."
    ],
    responsibilities: [
      "Implemented dynamic content display and storage logic in a .NET-based application.",
      "Enhanced data retrieval efficiency using C#/.NET for backend and JavaScript for frontend."
    ]
  },
  {
    title: ".NET Backend Developer",
    type: "(LIA Internship)",
    company: "BildHistoria Association",
    companyLink: "https://bildhistoria.se/",
    location: "Stockholm, Sweden",
    duration: "Sep 2023 – Apr 2024",
    achievements: [
      "Designed an image upload and validation system handling large CSV imports, ensuring 99% data accuracy.",
      "Developed a C# console app that automated CSV data processing, reducing manual workload by 80%."
    ],
    responsibilities: [
      "Created Swagger API endpoints for image uploads and validation.",
      "Integrated Azure Blob Storage for scalable image storage.",
      "Built backend functionality using C#/.NET, Docker, and Azure to improve platform performance."
    ]
  },
  {
    title: "IT Support Technician, Machine Operator & Warehouse Employee",
    type: "",
    company: "",
    location: "Stockholm, Sweden & Iasi, Romania",
    duration: "Prior to Sep 2022",
    achievements: [
      "Gained technical troubleshooting and customer support experience as an IT Support Technician.",
      "Worked as a heavy machine operator, developing problem-solving skills and attention to detail in high-precision tasks.",
      "Gained hands-on experience in logistics and teamwork as a warehouse employee, ensuring efficient inventory handling and order fulfillment."
    ],
    responsibilities: []
  }
];


const WorkExperience = ({ title, type, company, companyLink, location, duration, achievements, responsibilities }) => (
  <div className="d-flex flex-column justify-content-between align-items-start my-5">
    <h4 className="text-green">
      <motion.img
        src={job}
        alt="job icon"
        className="me-2 pb-1 job"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
      />
      {title} <span className="text-gray fs-md">{type}</span>
    </h4>
    <h5>
      {company && (
        <a href={companyLink} target="_blank" rel="noopener noreferrer" className="text-yellow link-to me-3">
          {company}
        </a>
      )}
      <span className="text-gray fs-sm fst-italic">{location} | {duration}</span>
    </h5>
    {achievements.length > 0 && <h6 className="text-blue">Key Achievements:</h6>}
    {achievements.map((ach, index) => (
      <p key={index} className="text-gray ms-4">• {ach}</p>
    ))}
    {responsibilities.length > 0 && <h6 className="text-blue">Responsibilities:</h6>}
    {responsibilities.map((res, index) => (
      <p key={index} className="text-gray ms-4">• {res}</p>
    ))}
  </div>
);

export default function Work() {
  return (
    <div className="container d-flex flex-column justify-content-between align-items-center align-items-lg-start my-5 py-5">
      <h2 className="text-orange align-self-center">
        Work Experience        
      </h2>
      <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3'>
      <div>
      <motion.img
        src={worker}
        alt="coder icon"
        className="worker-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
      />
      </div>

        <div>
            {workExperiences.map((job, index) => (
            <WorkExperience key={index} {...job} />
        ))}
        </div>

      </div>

    </div>
  );
}
