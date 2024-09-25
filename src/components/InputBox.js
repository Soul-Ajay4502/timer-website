import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ComponentStyles/InputBox.css';
import RightArrow from '../assets/icons/right-arrow-icon.svg';

const InputBox = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="subscription-form">
      <input
        type="email"
        placeholder="Enter Work Email"
        value={email}
        onChange={handleEmailChange}
        className="email-input"
      />
      <button className="subscribe-button" >
        <img src={RightArrow} alt="Subscribe" />
      </button>
      {/* {emailError && <p className="error-message">{emailError}</p>} */}
    </div>
  );
};

InputBox.propTypes = {
  onSubscribe: PropTypes.func.isRequired,
};

export default InputBox;
