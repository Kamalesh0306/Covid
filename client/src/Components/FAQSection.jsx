import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqData = [
    { question: 'How do I book a COVID vaccine slot?', answer: 'You can book a slot through our website by following the steps in the booking section.' },
    { question: 'Is the vaccine free of charge?', answer: 'Yes, the COVID vaccine is provided free of charge to eligible individuals.' },
    { question: 'Are COVID-19 vaccines safe?', answer: 'Yes, COVID-19 vaccines authorized by reputable health agencies undergo ' },
    { question: 'Can I get COVID-19 from the vaccine?', answer: 'No, COVID-19 vaccines currently authorized for use do not contain the live virus that causes COVID-19. ' },
    { question: 'Who should get the COVID-19 vaccine?', answer: 'COVID-19 vaccines are recommended for most individuals aged 5 and older, including those who have already had COVID-19.' },
    { question: 'Do COVID-19 vaccines have any long-term side effects?', answer: 'The vast majority of side effects from COVID-19 vaccines occur within a few days to weeks after vaccination and are generally mild and temporary.' },
    { question: 'How long does immunity from the COVID-19 vaccine last?', answer: 'The duration of immunity from COVID-19 vaccines is still being studied, but current evidence suggests that vaccinated individuals have strong protection against severe illness for at least several months.' },
    { question: 'Can I stop wearing masks and practicing social distancing after getting vaccinated?', answer: 'While COVID-19 vaccines significantly reduce the risk of severe illness, it is still possible to contract and spread the virus.' },
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
