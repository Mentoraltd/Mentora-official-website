import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md'; // Make sure you have react-icons installed

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index, event) => {
    if (event.target.open) { // Check if the details is being opened
      setOpenIndex(index);
    } else if (openIndex === index) {
      setOpenIndex(null); // Close only if it's the current open index
    }
  };
 
  return (
    <div className="leftSegment">
      {items.map((item, index) => (
        <details
          className="accordion"
          key={index}
          open={openIndex === index}
          onToggle={(event) => handleToggle(index, event)}
        >
          <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {item.title}
            {openIndex !== index && <MdAdd style={{color: "#1e2ede", fontSize: "24px"}} />}
          </summary>
          <p>{item.content}</p>
        </details>
      ))}
    </div>
  );
};

  export default Accordion;



  export const AccordionInstitution = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleToggle = (index, event) => {
      if (event.target.open) { // Check if the details is being opened
        setOpenIndex(index);
      } else if (openIndex === index) {
        setOpenIndex(null); // Close only if it's the current open index
      }
    };
   
    return (
      <div className="detailsAccordion">
        {items.map((item, index) => (
          <details
            className="accordionDetails"
            key={index}
            open={openIndex === index}
            onToggle={(event) => handleToggle(index, event)}
          >
            <summary className='accordionSummary' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {item.title}
              {openIndex !== index && <MdAdd style={{color: "#1e2ede", fontSize: "24px"}} />}
            </summary>
            <p>{item.content}</p>
          </details>
        ))}
      </div>
    );
  };