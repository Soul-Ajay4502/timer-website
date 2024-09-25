import React, { useState, useEffect } from 'react';
import ProgressBarComponent from './ProgressBarComponent';

const TimerComponent = ({ progressPercentage, setProgressPercentage }) => {
  const [seconds, setSeconds] = useState(0);

  // useEffect to handle the timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        // Increment seconds up to a max of 59
        const updatedSeconds = prev < 58 ? prev + 1 : 59;

        // Update the progress percentage (capped at 100% when 59 seconds is reached)
        setProgressPercentage(((updatedSeconds === 59 ? 60 : updatedSeconds) / 60) * 100);

        return updatedSeconds;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [setProgressPercentage]); 

  // Calculate remaining seconds for display
  const remainingSeconds = seconds % 60;

  // Format the time as 14:XX for display
  const formattedTime = `14:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;

  return (
    <div className="timer-container">
      <div style={{ color: 'rgba(111, 104, 129, 1)', fontSize: '10.24px', fontFamily: 'MonaSansLight' }}>Hours Worked</div>
      <p style={{ color: '#170C34', fontWeight: 700, fontSize: '20px', fontFamily: 'Archivo' }}>{formattedTime} Hours</p>
      <ProgressBarComponent percentage={progressPercentage} />
    </div>
  );
};

export default TimerComponent;
