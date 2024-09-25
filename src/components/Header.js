import React from 'react';
import './ComponentStyles/Header.css';
import DownArrow from '../assets/icons/down-arrow-icon.svg';
import Logo from '../assets/icons/app-logo.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/avatar-logo.svg';

const Header = () => {
  const menuItems = [
    { id: 1, name: 'Products', hasDropdown: true },
    { id: 2, name: 'Solutions', hasDropdown: true },
    { id: 3, name: 'Pricing', hasDropdown: false },
    { id: 4, name: 'Partner Program', hasDropdown: false },
    { id: 5, name: 'Resources', hasDropdown: true },
    { id: 6, name: 'About Us', hasDropdown: true }
  ];

  return (
    <div>
      {/* Top bar */}
      <div className="top-box">
        <p>
          Happy Employees, Effortless HR: Experience the Introdo Advantage.
          <span className="bold-text"> Try it for Free!</span>
        </p>
      </div>

      {/* Navigation bar */}
      <nav>
        <div className="nav-container">
          {/* Left side of navigation (logo and menu) */}
          <div className="nav-left">
            <ul className="nav-list">
              <li>
                {/* App logo */}
                <img src={Logo} alt="App Logo" className="nav-logo" />
                <span className="nav-logo-text">Introdo</span>
              </li>
              {/* Menu items using map */}
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.name}
                  {item.hasDropdown && <img src={DownArrow} alt="Down Arrow" className="nav-icon" />}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side of navigation (language and login buttons) */}
          <div className="nav-right">
            {/* Language selection button */}
            <button className="header-button language-button">
              EN <img src={DownArrow} alt="Down Arrow" className="button-icon" />
            </button>
            {/* Login button with profile icon */}
            <button className="header-button login-button">
              Log In <ProfileIcon className="profile-icon" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
