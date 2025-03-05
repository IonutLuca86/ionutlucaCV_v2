import me from '../assets/me.png'
import { motion } from 'framer-motion'
import './About.css'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {

    const {t} = useTranslation();

    return(
        <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center my-5 py-5">
            <div className='d-flex flex-row justify-content-center align-item-center'>
                <motion.img src={me} alt="me,myself and I image" className='me-image'
                    initial={{ opacity: 0, rotate: -2 }}
                    animate={{ opacity: 0.7, rotate: -5 }} 
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} />
            </div>
            <div className='d-flex flex-column justify-content-between align-item-center mt-5 mt-lg-0 ms-lg-2'>
            <h1 className='text-orange'>{t('about.title')}</h1>
            <div>
                <p>{t('about.name-front')}<h4 className='text-orange d-inline'>{t('about.name')}</h4>
                {t('about.name-after')}<span className='text-green fs-lg'>{t('about.function')}</span>
                {t('about.function-after')} <span  className='text-green fs-lg'>{t('about.specs1')}</span>
                {t('about.and')}<span  className='text-green fs-lg'>{t('about.specs2')}</span>. </p>
                 <p>{t('about.aboutme1')}</p>

                <p>{t('about.aboutme2')} 
                    <a href="https://www.iths.se/" target="_blank" rel="noopener noreferrer" 
                    className='text-yellow mx-2 link-to'>IT-Högskolan</a>{t('about.aboutme3')}
                    </p>
                <p>{t('about.aboutme4')}
                    </p>
                <p>{t('about.aboutme5')}</p>
               
                <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start mt-4 ps-lg-5'>                    
                        <div className='mb-sm-4'>
                        <h4 className='text-green fs-md'>{t('about.strengths-title')}</h4>
                        <div className='ms-4'>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>{t('about.strength1')}</p>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>{t('about.strength2')}</p>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>{t('about.strength3')}</p>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>{t('about.strength4')}</p>
                            <p className='text-gray fs-sm'><FaCheck className='mx-2'/>{t('about.strength5')}</p>
                        </div> 
                        </div>
                        <div className='pe-lg-4'>
                            <h4 className='text-green fs-md'>{t('about.languages-title')}</h4>
                            <div className='ms-4'>
                                <p className='text-orange fs-md'>{t('about.lang1')}<span className='text-gray'>{t('about.lang1-level')}</span></p>
                                <p className='text-orange fs-md'>{t('about.lang2')}<span className='text-gray'>{t('about.lang2-level')}</span></p>
                                <p className='text-orange fs-md'>{t('about.lang3')}<span className='text-gray'>{t('about.lang3-level')}</span></p>
                            </div>
                        </div>                                   
                </div>
               
                <p className='mt-4'>{t('about.aboutme6')}
                    <Link to="/work" className='text-yellow mx-2 link-to'>{t('about.link1')}</Link>, 
                    <Link to="/skills" className='text-yellow mx-2 link-to'>{t('about.link2')}</Link>{t('about.and')}
                    <Link to="/projects" className='text-yellow mx-2 link-to'>{t('about.link3')}</Link>{t('about.aboutme7')}</p>
            </div>
            </div>
            
        </div>
    )
}