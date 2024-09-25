import React from 'react';
import './ComponentStyles/EmployeeBoxContainer.css';

const EmployeeBoxContainer = ({ tabs, activeTab }) => {
  return (
    <div className="employee-box-container">
      <div className="employee-box-layer employee-layer1" style={{ backgroundColor: tabs[activeTab].layer1Color }}></div>
      <div className="employee-box-layer employee-layer2" style={{ backgroundColor: tabs[activeTab].layer2Color }}></div>
      <div className="employee-box-layer employee-layer3" style={{ backgroundColor: tabs[activeTab].layer3Color }}>
        {tabs[activeTab].content.map((text, index) => (
          <React.Fragment key={index}>
            <p>{text}</p>
            {index < tabs[activeTab].content.length - 1 && <hr className="employee-custom-line" />}
          </React.Fragment>
        ))}
      </div>
    </div>

  );
};

export default EmployeeBoxContainer; 
