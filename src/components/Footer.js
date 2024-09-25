import React, { useState, useRef, useEffect } from 'react';
import './ComponentStyles/Footer.css';
import DownArrow from '../assets/icons/down-arrow-white-icon.svg';
import Logo from '../assets/icons/app-logo.svg';
import InputBox from './InputBox';
import PlayStoreImg from '../assets/images/PlayStoreImg.png';
import AppStoreImg from '../assets/images/AppStoreImg.png';
import FooterLogoBsi from '../assets/images/FooterLogoBsi.png';
import FooterLogoHipaa from '../assets/images/FooterLogoHipaa.png';
import FooterLogoGdpr from '../assets/images/FooterLogoGdpr.png';
import FooterLogoAicpa from '../assets/images/FooterLogoAicpa.png';
import { ReactComponent as Fb } from '../assets/icons/facebook.svg';
import { ReactComponent as Insta } from '../assets/icons/instagram.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkdedin.svg';

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown if a click is detected outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Listen for clicks
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up listener on unmount
    };
  }, [dropdownRef]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language); 
    setIsDropdownOpen(false); 
  };

  const languages = [
    { id: 1, lang: 'EN' },
    { id: 2, lang: 'AR' }
    // Add more languages if needed
  ];

  return (
    <div className="footer__language-selector" ref={dropdownRef}>
      <button className="button" onClick={toggleDropdown}>
        {selectedLanguage} <img src={DownArrow} alt="Down Arrow" className="button-icon" />
      </button>

      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {languages.map(({ id, lang }) => (
            <li key={id} className="dropdown-item" onClick={() => handleLanguageSelect(lang)}>
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main Footer component
const Footer = () => {
  const handleSubscribe = (email) => {
    console.log('Subscribed with:', email);
  };

  // Lists products
  const products = [
    { name: "Core HR", label: "" },
    { name: "Employee Management", label: "" },
    { name: "Leave Management", label: "" },
    { name: "Time & Attendance", label: "" },
    { name: "Payroll Management", label: "" },
    { name: "People Analytics", label: "" },
    { name: "Recruitment", label: "NEW" },
    { name: "Performance Management", label: "COMING SOON" },
  ];
  // Lists resources
  const resources = [
    "All Resources",
    "Blogs",
    "Case Studies",
    "Product Videos",
    "HR Glossary",
  ];
  // Lists platform
  const platform = [
    "Log In",
    "Schedule a Demo",
    "Use Cases",
    "Integrations",
    "Pricing",
  ];

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top-section">
          <div className="footer__logo-container">
            <img src={Logo} alt="App Logo" className="footer__logo" />
            <span className="footer__logo-text">Introdo</span>
          </div>

          <div className="footer__subscription-container">
            <p className="footer__subscription-text">HR Updates, straight to your Inbox - Subscribe Today </p>
            <InputBox onSubscribe={handleSubscribe} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px', width: '12%', justifyContent: 'space-around', marginLeft: '100px' }}>
            <Fb />
            <Insta />
            <LinkedIn />
          </div>
          <LanguageSelector />
        </div>

        <div className="footer__info-sections">
          <div className="footer__info-section">
            <h3 className="footer__section-title">Products</h3>
            <ul className="footer__info-list">
            {products.map(({ name, label }, index) => (
            <li key={index} className="footer__info-item">
              {name}
              {label && <span className="footer__label"> {label}</span>}
            </li>
          ))}
            </ul>
          </div>
          <div className="footer__info-section">
            <h3 className="footer__section-title">Resources</h3>
            <ul className="footer__info-list">
              {resources.map((item, index) => (
                <li key={index} className="footer__info-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="footer__info-section">
            <h3 className="footer__section-title">Platform</h3>
            <ul className="footer__info-list">
              {platform.map((item, index) => (
                <li key={index} className="footer__info-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="footer__info-section-image">
            <h3 className="footer__section-title">Mobile App</h3>
            <div className="footer__app-links">
              <img src={PlayStoreImg} alt="Play Store" className="footer__app-store-img" />
              <img src={AppStoreImg} alt="App Store" className="footer__app-store-img" />
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__certification-logos">
          <img src={FooterLogoBsi} alt="BSI Certification" className="footer__certification-logo" />
          <img src={FooterLogoBsi} alt="BSI Certification" className="footer__certification-logo" />
          <img src={FooterLogoHipaa} alt="HIPAA Certification" className="footer__certification-logo" />
          <img src={FooterLogoGdpr} alt="GDPR Certification" className="footer__certification-logo" />
          <img src={FooterLogoAicpa} alt="AICPA Certification" className="footer__certification-logo" />
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom-section">
          <div className="footer__legal-links">
            <div className="footer__legal-link">Privacy Policy</div>
            <div className="footer__legal-link">Terms of Use</div>
            <div className="footer__legal-link">Cookie Policy</div>
          </div>
          <p className="footer__copyright-text">Copyright © 2024 KPI Group. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
