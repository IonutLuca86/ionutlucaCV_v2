import { TbBrandCSharp, TbSql, TbApi } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import IconTooltip from './partials/IconTooltip'
import { FaPython, FaDocker, FaBootstrap,FaFigma } from "react-icons/fa6";
import { FaNode,FaReact, FaGitSquare, FaGithub, FaTrello, FaSlack, FaCheck  } from "react-icons/fa";
import { SiDotnet, SiVite, SiBlazor, SiExpress, SiPostgresql, SiMysql, 
    SiMongodb, SiCss3, SiAuth0, SiMeilisearch, SiPostman,SiSwagger } from "react-icons/si";
import { DiDjango, DiVisualstudio} from "react-icons/di";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { TiHtml5 } from "react-icons/ti";
import { PiKanbanDuotone } from "react-icons/pi";
import './About.css'




export default function Skills() {


    return (
        <div className="container d-flex flex-column justify-content-between align-items-center my-5 ">
              <h2 className='text-orange'>Skills & Tools</h2>
              <span className="text-blue fst-italic small align-self-start ms-lg-5 mt-3">Hover over icons, most of them offer more information!</span>
                <div className="d-flex flex-column justify-content-between align-items-center align-items-lg-start mt-4">
                    
                    <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3">
                    <h3 className="text-green">Programming Languages:</h3>   
                    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center  gap-2">
                        <IconTooltip icon={TbBrandCSharp} text='C#' size={40} ></IconTooltip>
                        <IconTooltip icon={RiJavascriptFill} text='JavaScript' size={40}></IconTooltip>
                        <IconTooltip icon={FaPython} text='Python' size={40}></IconTooltip>
                        <IconTooltip icon={FaNode} text='Node.js - basic level' size={40}></IconTooltip>
                    </div>
                    </div>
  
                    <div className="d-flex flex-column flex-md-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                    <h3 className="text-green">Frameworks and Libraries:</h3>
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <div className="d-flex align-items-center text-gray fs-md">
                            <SiDotnet size={32} className="me-2" /> Core
                        </div>
                        <div className="d-flex align-items-center text-gray fs-md">
                            ASP <SiDotnet size={32} className="ms-1" />
                        </div>
                        <div className="d-flex align-items-center text-gray fs-md">
                            <SiBlazor size={32} className="me-2" /> Blazor
                        </div>
                        <div className="text-gray fs-md">Entity Framework</div>
                        
                        <IconTooltip icon={FaReact} text="React.js" size={40} />
                        <IconTooltip icon={SiVite} text="Vite (React build tool)" size={40} />
                        <IconTooltip icon={DiDjango} text="Django - Python framework for RESTful API" size={40} />
                        <IconTooltip icon={SiExpress} text="Express.js - Node.js framework for RESTful API - basic level" size={40} />
                    </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                    <h3 className="text-green">Databases:</h3>   
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <IconTooltip icon={TbSql} text='SQL and SQL Server' size={40} ></IconTooltip>
                        <IconTooltip icon={SiPostgresql} text='PostgreSQL' size={40}></IconTooltip>
                        <IconTooltip icon={SiMysql} text='MySQL' size={40}></IconTooltip>
                        <IconTooltip icon={SiMongodb} text='MongoDB' size={40}></IconTooltip>
                    </div>  

                    </div>
                        <div  className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                        <h3 className="text-green">Cloud and DevOps:</h3>   
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <IconTooltip icon={VscAzure} text='Microsoft Azure' size={40} ></IconTooltip>
                        <IconTooltip icon={FaDocker} text='Docker' size={40}></IconTooltip>
                        <IconTooltip icon={FaGitSquare} text='Git' size={40}></IconTooltip>
                        <IconTooltip icon={FaGithub} text='GitHub' size={40}></IconTooltip>
                    </div> 
                        </div>
           
                    <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                    <h3 className="text-green">Cloud and DevOps:</h3>   
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <IconTooltip icon={TiHtml5} text='HTML' size={40} ></IconTooltip>
                        <IconTooltip icon={SiCss3} text='CSS (including FlexBox)' size={40}></IconTooltip>
                        <IconTooltip icon={FaBootstrap} text='Bootstrap' size={40}></IconTooltip>
                        <IconTooltip icon={SiAuth0} text='Authentication and Authorization (OAuth, JWT, 
                        Identity Server, role-based authorization)' size={40}></IconTooltip>
                        <IconTooltip icon={TbApi} text='RESTful API (development and consumption)' size={40}></IconTooltip>
                    </div>
                    </div>


                        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                        <h3 className="text-green">Software Development Practices:</h3>   
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <p className="text-gray fs-md me-3">Agile - Scrum<small>(basic)</small></p>
                        <p className="text-gray fs-md me-3">CI/CD<small>(basic)</small></p>
                        <p className="text-gray fs-md me-3">Microservices<small>(basic)</small></p>
                        <p className="text-gray fs-md me-3">Kubernetes<small>(basic)</small></p>
                    </div>
                        </div>

                        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                        <h3 className="text-green">Tools & Technologies:</h3>   
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <IconTooltip icon={DiVisualstudio} text='Visual Studio' size={40} ></IconTooltip>
                        <IconTooltip icon={VscVscode} text='VS Code' size={40}></IconTooltip>
                        <IconTooltip icon={SiMeilisearch} text='MeiliSearch' size={40}></IconTooltip>
                        <IconTooltip icon={SiPostman} text='Postman' size={40}></IconTooltip>
                        <IconTooltip icon={SiSwagger} text='Swagger' size={40}></IconTooltip>
                        <IconTooltip icon={FaTrello} text='Trello' size={40}></IconTooltip>
                        <IconTooltip icon={PiKanbanDuotone} text='Kanban' size={40}></IconTooltip>
                        <IconTooltip icon={FaFigma} text='Figma' size={40}></IconTooltip>
                        <IconTooltip icon={FaSlack} text='Slack' size={40}></IconTooltip>                    
                    </div>
                        </div>

                </div>
                <h2 className='text-orange  mt-5'>Certificates</h2>
                <div className="d-flex flex-column justify-content-center align-items-start mt-4">
                    <div className="d-flex flex-column justify-content-between align-item-center">
                    <h4 className="text-green">IBM Full Stack Developer Professional Certificate</h4>
                    <h6 className="text-gray">IBM & Coursera</h6>
                    <p className="text-gray fs-md ">Covers JavaScript, HTML, CSS for frontend, and Python for backend development.</p>
                    <small>
                      <a href="https://coursera.org/share/64aa30aa3bc8bb2397571249467b39f6" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            Diploma 
                        </a>
                        <a href="https://www.credly.com/badges/6dccd3e4-dec2-42b3-be6d-a743c1d59c0a/public_url" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            Badge
                        </a>
                    </small>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-item-center mt-3">
                    <h4 className="text-green">META Backend Developer Certificate</h4>
                    <h6 className="text-gray">META & Coursera</h6>
                    <p className="text-gray fs-md ">Covers JavaScript, HTML, CSS for frontend, and Python for backend development.</p>
                    <small>
                      <a href="https://coursera.org/share/80e8c2180c49bc4aa43af9928a5f017a" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            Diploma 
                        </a>
                        <a href="https://www.credly.com/badges/10ce5f0d-0417-494b-86f5-3b454c98b08d/public_url" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            Badge
                        </a>
                    </small>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-item-center mt-3">
                    <h4 className="text-green">Microsoft Foundational C#</h4>
                    <h6 className="text-gray">Microsoft & freeCodeCamp</h6>
                    <p className="text-gray fs-md">Covers fundamental C# concepts, syntax, and 
                        object-oriented programming principles.</p>
                        <small>
                      <a href="https://www.freecodecamp.org/certification/ionutluca/foundational-c-sharp-with-microsoft" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            Diploma 
                        </a>
                    </small>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-item-center mt-3">
                    <h4 className="text-green">MongoDB C# Developer Path</h4>
                    <h6 className="text-gray">MongoDB</h6>
                    <p className="text-gray fs-md ">Provides hands-on experience with MongoDB and C#
                             integration for building scalable applications. </p>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-item-center mt-3">
                    <h4 className="text-green">Relational Database Certification</h4>
                    <h6 className="text-gray">freeCodeCamp</h6>
                    <p className="text-gray fs-md ">Covers SQL queries, database design, and normalization techniques.</p>
                    <small>
                      <a href="https://www.freecodecamp.org/certification/ionutluca/relational-database-v8" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            Diploma 
                        </a>
                    </small>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-item-center mt-3">
                    <h4 className="text-green">.NET Full Stack Developer</h4>
                    <h6 className="text-gray">Board Infinity & Coursera</h6>
                    <p className="text-gray fs-md ">Covers full stack development using ASP.NET MVC, Blazor, React and JavaScript.</p>
                    <small>
                      <a href="https://coursera.org/share/495e6275824a8589eae1163967018dc0" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            Diploma 
                        </a>
                    </small>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-item-center mt-3">
                    <h4 className="text-green">Frontend Development</h4>
                    <h6 className="text-gray">Scrimba & Coursera</h6>
                    <p className="text-gray fs-md ">Focuses on frontend development using HTML, CSS and JavaScript.</p>
                    <small>
                      <a href="https://coursera.org/share/ef5d2661d84709184fcd48c6adbe9970" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            Diploma 
                        </a>
                    </small>
                    </div>
                    <p className="text-blue fs-md fst-italic mt-4">More certifications available on my
                        <a href="https://www.linkedin.com/in/ionut-luca-b4938924b/" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            LinkeIn profile
                        </a>
                    </p>
                </div>
       
            <h2 className='text-orange mt-5'>Education</h2>
            <div className="d-flex flex-column justify-content-between align-items-start mt-3 mt-lg-5">
                <h3 className="text-yellow">.NET Developer <span className="text-gray fs-sm">(Higher Vocational Diploma)</span></h3>
                <h4 className="text-green"><a href="https://www.iths.se/" target="_blank"
                    rel="noopener noreferrer" 
                    className='text-green mx-2 link-to'>IT-Högskolan</a> |<span className="text-gray fs-sm"> Sep 2022 - May 2024</span></h4>
                <h6 className="text-gray"><FaCheck size={20} className="me-2"/>Focused on development of 
                    software, applications or web applications using  C#, .NET, JavaScript, SQL, 
                    and MongoDB.</h6>
                <h6 className="text-gray"><FaCheck size={20} className="me-2"/>Hands-on experience in 
                    full-stack development & Agile (Scrum).</h6>
                
            </div>
           
     
        </div>
    )
}