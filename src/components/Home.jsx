
import './Home.css'
import hello_world from '../assets/hello_world-removebg-preview.png'
import resume from '../assets/IonutLuca_resume.pdf'
import cv from '../assets/IonutLuca_cv.pdf';
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

export default function Home() {

    const {t} = useTranslation();
    const lang = localStorage.getItem('language') || 'en';

    const cv_version = ()=>{
        if(lang == 'en')
            return resume;
        else if(lang == 'sv')
            return cv;
    }

    return (
        <div className="container d-flex flex-column justify-content-between align-item-center my-5 py-5">

            <div className='d-flex flex-lg-row justify-content-center align-item-center'>             
            <h1 className="wordCarousel">
            <span className='text-white'>{t('home.greeting')}</span>
            <div>           
                <ul className="flip5">
                    <li>{t('home.greeting1')}</li>
                    <li>{t('home.greeting2')}</li>
                    <li>{t('home.greeting3')}</li>
                    <li>{t('home.greeting4')}</li>
                    <li>{t('home.greeting5')}</li>
                </ul>
            </div>
            </h1>                     
            </div>
            <div className='d-flex flex-column flex-lg-row justify-content-between align-item-center mt-5'>
            <div className='container my-5'>
                <h3 className='text-white'>{t('home.front_name')}<span className='my_name text-orange'>{t('home.name')}</span></h3>
                <h4 className='text-green fst-italic'>{t('home.title')}</h4>
                <h6>{t('home.specialization')}</h6>
                <br /><br />
                <h5>{t('home.description1')}</h5>
                <h5>{t('home.description2')}</h5>
                <br />
                <h6>{t('home.download-text1')}  
                    <a href={cv_version()} download={cv_version()} className='download_resume text-yellow mx-2'> {t('home.download-link-text')} </a>
                    {t('home.download-text2')}</h6>


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

