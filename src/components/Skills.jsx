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
import { useTranslation } from "react-i18next";




export default function Skills() {

    const {t} = useTranslation();
    const certificates = t('certificates.certificate', { returnObjects: true });
    const Certificate = ({title,issued_by,description,diploma,diploma_link,badge,badge_link}) =>{
        return(
                <div className="d-flex flex-column justify-content-between align-item-center mt-4">
                    <h4 className="text-green">{title}</h4>
                    <h6 className="text-gray">{issued_by}</h6>
                    <p className="text-gray fs-md ">{description}</p>
                    <small>
                        {diploma && ( <a href={diploma_link} target="_blank" rel="noopener noreferrer" className="text-yellow link-to">
                            {diploma}
                        </a>)}
                        {badge && (<a href={badge_link} target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                            {badge}
                        </a>)}                        
                    </small>
                </div>
        )
    };

    return (
        <div className="container d-flex flex-column justify-content-between align-items-center my-5 ">
              <h2 className='text-orange'>{t('skills.title')}</h2>
              <span className="text-blue fst-italic small align-self-start ms-lg-5 mt-3">{t('skills.info')}</span>
                <div className="d-flex flex-column justify-content-between align-items-center align-items-lg-start mt-4">
                    
                    <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3">
                    <h3 className="text-green">{t('skills.category1')}</h3>   
                    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center  gap-2">
                        <IconTooltip icon={TbBrandCSharp} text='C#' size={40} ></IconTooltip>
                        <IconTooltip icon={RiJavascriptFill} text='JavaScript' size={40}></IconTooltip>
                        <IconTooltip icon={FaPython} text='Python' size={40}></IconTooltip>
                        <IconTooltip icon={FaNode} text={`Node.js - ${t('skills.basic')}`} size={40}></IconTooltip>
                    </div>
                    </div>
  
                    <div className="d-flex flex-column flex-md-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                    <h3 className="text-green">{t('skills.category2')}</h3>
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
                        <IconTooltip icon={DiDjango} text={`Django - Python ${t('skills.framework')}`} size={40} />
                        <IconTooltip icon={SiExpress} text={`Express.js - Node.js ${t('skills.framework')} - ${t('skills.basic')}`} size={40} />
                    </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                    <h3 className="text-green">{t('skills.category3')}</h3>   
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <IconTooltip icon={TbSql} text='SQL and SQL Server' size={40} ></IconTooltip>
                        <IconTooltip icon={SiPostgresql} text='PostgreSQL' size={40}></IconTooltip>
                        <IconTooltip icon={SiMysql} text='MySQL' size={40}></IconTooltip>
                        <IconTooltip icon={SiMongodb} text='MongoDB' size={40}></IconTooltip>
                    </div>  

                    </div>
                        <div  className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                        <h3 className="text-green">{t('skills.category4')}</h3>   
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <IconTooltip icon={VscAzure} text='Microsoft Azure' size={40} ></IconTooltip>
                        <IconTooltip icon={FaDocker} text='Docker' size={40}></IconTooltip>
                        <IconTooltip icon={FaGitSquare} text='Git' size={40}></IconTooltip>
                        <IconTooltip icon={FaGithub} text='GitHub' size={40}></IconTooltip>
                    </div> 
                        </div>
           
                    <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                    <h3 className="text-green">{t('skills.category5')}</h3>   
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
                        <h3 className="text-green">{t('skills.category6')}</h3>   
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <p className="text-gray fs-md me-3">Agile - Scrum<small>(basic)</small></p>
                        <p className="text-gray fs-md me-3">CI/CD<small>(basic)</small></p>
                        <p className="text-gray fs-md me-3">Microservices<small>(basic)</small></p>
                        <p className="text-gray fs-md me-3">Kubernetes<small>(basic)</small></p>
                    </div>
                        </div>

                        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center gap-3 mt-4">
                        <h3 className="text-green">{t('skills.category7')}</h3>   
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
                <h2 className='text-orange  mt-5'>{t('certificates.title')}</h2>
                <div className="d-flex flex-column justify-content-center align-items-start mt-4">
                    {
                        certificates.map((certificate,index) =>(
                            <Certificate key={index} {...certificate} />
                        ))
                    } 
                    <p className="text-blue fs-md fst-italic mt-4">{t('certificates.more')}
                        <a href="https://www.linkedin.com/in/ionut-luca-b4938924b/" target="_blank" rel="noopener noreferrer" className="text-yellow ms-2 link-to">
                        {t('certificates.profile')}
                        </a>
                    </p>
                </div>
       
            <h2 className='text-orange mt-5'>{t('education.title')}</h2>
            <div className="d-flex flex-column justify-content-between align-items-start mt-3 mt-lg-5 mb-4">
                <h3 className="text-green">{t('education.name')} <span className="text-gray fs-sm">{t('education.type')}</span></h3>
                <h4 ><a href="https://www.iths.se/" target="_blank"
                    rel="noopener noreferrer" 
                    className='text-yellow mx-2 link-to'>IT-Högskolan</a> |<span className="text-gray fs-sm">{t('education.date')}</span></h4>
                <h6 className="text-gray"><FaCheck size={20} className="me-2"/>{t('education.description1')}</h6>
                <h6 className="text-gray"><FaCheck size={20} className="me-2"/>{t('education.description2')}</h6>
                
            </div>
           
     
        </div>
    )
}