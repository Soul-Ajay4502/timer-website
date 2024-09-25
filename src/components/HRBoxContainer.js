import React from 'react';
import './ComponentStyles/HRBoxContainer.css';

const HRBoxContainer = ({ tabs, activeTab }) => {
  return (
    <div className="hr-box-container">
      <div className="hr-box-layer hr-layer1" style={{ backgroundColor: tabs[activeTab].layer1Color }}></div>
      <div className="hr-box-layer hr-layer2" style={{ backgroundColor: tabs[activeTab].layer2Color }}></div>
      <div className="hr-box-layer hr-layer3" style={{ backgroundColor: tabs[activeTab].layer3Color }}>
        {tabs[activeTab].content.map((text, index) => (
          <React.Fragment key={index}>
            <p>{text}</p>
            {index < tabs[activeTab].content.length - 1 && <hr className="hr-custom-line" />}
          </React.Fragment>
        ))}
      </div>
    </div>

  );
};

export default HRBoxContainer;
