/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import job from '../assets/job.png';
import './About.css';
import { motion } from 'framer-motion';
import worker from '../assets/worker.png';

export default function Work() {
  const { t } = useTranslation();

  const workExperiences = t('work.jobs', { returnObjects: true });

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
      {achievements.length > 0 && <h6 className="text-blue">{t('work.achievements')}</h6>}
      {achievements.map((ach, index) => (
        <p key={index} className="text-gray ms-4">• {ach}</p>
      ))}
      {responsibilities.length > 0 && <h6 className="text-blue">{t('work.responsibilities')}</h6>}
      {responsibilities.map((res, index) => (
        <p key={index} className="text-gray ms-4">• {res}</p>
      ))}
    </div>
  );

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center align-items-lg-start my-5 py-5">
      <h2 className="text-orange align-self-center">
        {t('work.title')}
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
