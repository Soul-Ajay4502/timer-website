import React from 'react';
import './ComponentStyles/ProgressBar.css';

const ProgressBar = ({ progress = 0, height = '6px', color = '#4caf50', backgroundColor = '#ddd', borderRadius = '5px' }) => {
  return (
    <div className="progress-bar-container" style={{ height, backgroundColor, borderRadius }}>
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius: 'inherit',
          transition: 'width 0.25s ease-in-out'
        }}
      ></div>
    </div>
  );
};



const ProgressBarComponent = ({ percentage }) => {
  return (
    <>
    <ProgressBar progress={percentage}/>
    </>
  );
};

export default ProgressBarComponent;