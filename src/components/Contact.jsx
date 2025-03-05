import { useState } from "react";
import emailjs from '@emailjs/browser'
import { MdEmail,MdOutlinePhoneIphone } from "react-icons/md";
import { FaGithub,FaLinkedin  } from "react-icons/fa6";

import './About.css'
import { useTranslation } from "react-i18next";

export default function Contact() {

    const {t} = useTranslation();
    const lang = localStorage.getItem('language') || 'en';

    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: '',
      });
    
      const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        message: '',
      });

      const [showSuccessMsg,setShowSuccessMsg] = useState(false);


        const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
   
        const newErrors = {};
        if (values.user_name.trim() === '') {
          newErrors.user_name = lang == 'sv'? 'Namn är obligatoriskt': "Name is required";
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
          newErrors.user_email = lang == 'sv'? 'E-post är ogiltig eller saknas':'Invalid email address or missing';
        }
        if (values.message.trim() === '') {
          newErrors.message = lang == 'sv'? 'Meddelande är obligatoriskt': 'Message is required';
        }
    
        setErrors(newErrors);   
     
        if (Object.keys(newErrors).length === 0) {       
          
          setValues({user_name: "", user_email: "", message: ""});
          console.log('Form is valid. Sending email...');
          emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           setShowSuccessMsg(true);
           setTimeout(() => {
            setShowSuccessMsg(false);
           },10000);
        }, function(error) {
           console.log('FAILED...', error);
           alert(lang == 'sv'? "Misslyckades att skicka meddelandet! Försök igen!": "Failed to send message! Try again!")
        });
        } else {
          alert(lang == 'sv'? "Vänligen fyll i alla obligatoriska fält korrekt.": 'Please fill in all required fields correctly.');
        }
      }; 


      

    return(
        <div className="container d-flex flex-column justify-content-between align-items-center my-5 ">
        <h2 className="text-orange">{t('contact.title')}</h2>
        <div className="d-flex flex-column justify-content-between align-item-center mt-5">       
            <h6 className="text-gray">{t('contact.intro')}</h6>
                <div className="d-flex flex-column justify-content-between align-item-center ms-5 mt-3">
                    <p className="text-blue fs-md"><MdOutlinePhoneIphone size={25} className="me-2"/>{t('contact.phone')}
                    <span className="text-yellow ms-2">+46 76 587 90 94</span>  
                    </p>
                    <p className="text-blue fs-md"><MdEmail size={25} className="me-2"/>{t('contact.email')}
                    <a href="mailto:ic.luca@outlook.com"  
                    className='text-yellow link-to ms-3'>ic.luca@yahoo.com</a>   
                    </p>
                    <p className="text-blue fs-md"><FaLinkedin  size={25} className="me-2"/>LinkedIn:
                    <a href="https://www.linkedin.com/in/ionut-luca-b4938924b/" target="_blank" rel="noopener noreferrer" 
                    className='text-yellow link-to ms-3'>LinkedIn {t('contact.profile')}</a>   
                    </p>
                    <p className="text-blue fs-md"><FaGithub size={25} className="me-2"/>GitHub:
                    <a href="https://github.com/IonutLuca86" target="_blank" rel="noopener noreferrer" 
                    className='text-yellow link-to ms-3'>GitHub {t('contact.profile')}</a>   
                    </p>
                </div>
                <h6 className="text-gray mt-2">{t('contact.second_intro')}</h6>
        </div>
        <div className="my-5"> 
        {showSuccessMsg ? (
                    <div className="success-message text-green text-center">
                        <h4>{t('contact.success_msg1')}</h4>
                        <p>{t('contact.success_msg2')}</p>
                    </div>
                ) : (
                <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-between align-item-center gap-2' 
                        style={{minWidth:'400px'}}>
                    <input type="hidden" name="from_name" value="my CV website" />
                    <label className="text-gray">{t('contact.your_name')}</label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="form-input text-normal gray"
                        required
                        value={values.user_name}
                        onChange={handleChange}
                    />
                    <span className="error-message">{errors.user_name}</span>
                    <label className="text-gray">{t('contact.your_email')}</label>
                    <input
                        type="email"
                        name="user_email"
                        className="form-input text-normal gray"
                        required
                        value={values.user_email}
                        onChange={handleChange}
                    />
                    <span className="error-message">{errors.user_email}</span>
                    <label className="text-gray">{t('contact.your_message')}</label>
                    <textarea
                        name="message"
                        className="text-white"
                        value={values.message}
                        rows={8}
                        onChange={handleChange}
                    />
                    <span className="error-message">{errors.message}</span>
                    <button
                        type="submit"
                        id="sendBtn"
                        className="btn btn-outline-light"
                    >
                        {t('contact.send')}
                    </button>
                    </form>)}
            </div>
        <h4 className="text-green">{t('contact.outro')}</h4>
    </div>
    ) 
}