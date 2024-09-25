import React from 'react';
import './ComponentStyles/LineManagerBoxContainer.css';

const LineManagerBoxContainer = ({ tabs, activeTab }) => {
    return (
        <div className="line-manager-box-container">
            <div className="line-manager-box-layer line-manager-layer1" style={{ backgroundColor: tabs[activeTab].layer1Color }}></div>
            <div className="line-manager-box-layer line-manager-layer2" style={{ backgroundColor: tabs[activeTab].layer2Color }}></div>
            <div className="line-manager-box-layer line-manager-layer3" style={{ backgroundColor: tabs[activeTab].layer3Color }}>
                {tabs[activeTab].content.map((text, index) => (
                    <React.Fragment key={index}>
                        <p>{text}</p>
                        {index < tabs[activeTab].content.length - 1 && <hr className="line-manager-custom-line" />}
                    </React.Fragment>
                ))}
            </div>
        </div>

    );
};

export default LineManagerBoxContainer; 
