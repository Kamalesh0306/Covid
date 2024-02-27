import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqData = [
    { 
      question: 'How can I find out if I am eligible for the COVID-19 vaccine?', 
      answer: 'Eligibility for the COVID-19 vaccine varies depending on factors such as age, occupation, and underlying health conditions. You can check your eligibility status on government health websites or by consulting with your healthcare provider.' 
    },
    { 
      question: 'Where can I get vaccinated against COVID-19?', 
      answer: 'COVID-19 vaccines are available at various locations, including hospitals, clinics, pharmacies, and vaccination centers. You can check online portals or contact local health authorities for information on vaccination sites near you.' 
    },
    { 
      question: 'Do I need to schedule an appointment for my COVID-19 vaccine?', 
      answer: 'It is recommended to schedule an appointment for your COVID-19 vaccine to ensure availability and minimize wait times. However, some vaccination sites may offer walk-in appointments depending on vaccine availability and local guidelines.' 
    },
    { 
      question: 'What documents do I need to bring with me for my COVID-19 vaccine appointment?', 
      answer: 'You may need to bring identification documents, such as a driver\'s license or passport, as well as any relevant medical records or insurance information. Check with the vaccination site or healthcare provider for specific requirements.' 
    },
    { 
      question: 'What should I expect during and after receiving the COVID-19 vaccine?', 
      answer: 'During vaccination, you will receive the vaccine as an injection in your arm. Afterward, you may experience mild side effects such as soreness at the injection site, fatigue, or low-grade fever. These side effects are normal and typically resolve within a few days.' 
    },
    { 
      question: 'Can I get the COVID-19 vaccine if I have allergies or underlying health conditions?', 
      answer: 'Individuals with allergies or underlying health conditions should consult with their healthcare provider before getting vaccinated. In most cases, COVID-19 vaccines are safe for individuals with allergies or chronic health conditions, but it is important to discuss any concerns with a healthcare professional.' 
    },
    { 
      question: 'What should I do if I experience adverse reactions after receiving the COVID-19 vaccine?', 
      answer: 'If you experience severe or concerning symptoms after receiving the COVID-19 vaccine, such as difficulty breathing or swelling of the face or throat, seek medical attention immediately. You can also report adverse reactions to the Vaccine Adverse Event Reporting System (VAERS) or contact your healthcare provider for guidance.' 
    },
    { 
      question: 'Do I still need to wear a mask and practice social distancing after receiving the COVID-19 vaccine?', 
      answer: 'While COVID-19 vaccines provide strong protection against severe illness, it is still possible to contract and spread the virus. Therefore, it is important to continue following public health guidelines, including wearing masks, practicing social distancing, and washing hands frequently, especially in crowded or high-risk settings.' 
    }
  ];
  

  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id = "faq">
        <div>
        <h1 className='fancy2'>
            FAQs
        </h1>
        </div>
    <div className="faq-section">
        
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleQuestionClick(index)}
        >
          <div className="question">{faq.question}</div>
          {index === activeIndex && <div className="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
   </div> 
  );
};

export default FAQSection;
