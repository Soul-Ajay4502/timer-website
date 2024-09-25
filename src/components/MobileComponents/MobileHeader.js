import React, { useState, useRef, useEffect } from 'react';
import '../MobileComponents/ComponentStyles/MobileHeader.css';
import DownArrow from '../../assets/icons/down-arrow-icon.svg';
import Logo from '../../assets/icons/app-logo.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';

const MobileHeader = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isDesc, setIsDesc] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const dropdownRef = useRef(null);


    const menuItems = [
        { id: 1, name: 'Products', hasDropdown: true },
        { id: 2, name: 'Solutions', hasDropdown: true },
        { id: 3, name: 'Pricing', hasDropdown: false },
        { id: 4, name: 'Partner Program', hasDropdown: false },
        { id: 5, name: 'Resources', hasDropdown: true },
        { id: 6, name: 'About Us', hasDropdown: true }
    ];

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const toggleDescShow = () => {
        setIsDesc(!isDesc);
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

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
        setSelectedLanguage(language); // Update selected language
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const languages = [
        { id: 1, lang: 'EN' },
        { id: 2, lang: 'AR' }
        // Add more languages if needed
    ];

    return (
        <div className='mob-head'>
            {/* Navigation bar */}
            <nav className="mob-navbar">
                <div className="mob-navcontainer">
                    {/* Logo Section */}
                    <div className="mob-navlogo-container">
                        <img src={Logo} alt="App Logo" className="mob-navlogo" />
                        <span className="mob-navlogo-text">Introdo</span>
                    </div>

                    {/* Language selection button */}
                    <div style={{ display: 'flex' }}>
                        <div className="mob_head__language-selector" ref={dropdownRef}>
                            <div className="mob-button" onClick={toggleDropdown}>
                                {selectedLanguage} <img src={DownArrow} alt="Down Arrow" className="mob-button-icon" />
                            </div>

                            {isDropdownOpen && (
                                <ul className="mob-dropdown-menu">
                                    {languages.map(({ id, lang }) => (
                                        <li key={id} className="mob-dropdown-item" onClick={() => handleLanguageSelect(lang)}>
                                            {lang}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Drawer icon for menu */}
                        <button className="drawer-icon" onClick={toggleDrawer}>
                            <Hamburger className="menu-icon" />
                        </button>
                    </div>

                    {/* Drawer Menu */}
                    <div className={`drawer-menu ${isDrawerOpen ? 'open' : ''}`}>
                        <div className="mob-navlist">
                            {menuItems.map((item, index) => (
                                <div key={index} className="drawer-item">
                                    {item.name}
                                    {item.hasDropdown && <img src={DownArrow} alt="Down Arrow" className="mob-navicon" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`mob-desc-box ${isDesc ? 'disable-desc' : ''}`}>
                <p style={{fontFamily:'MonaSansLight',fontSize:'12.8px',fontWeight:'400',color:'rgba(28, 14, 60, 1)',lineHeight:'19.2px'}}>
                    Happy Employees, Effortless HR: Experience the Introdo Advantage.
                    <span className="bold-text"> Try it for Free!</span>
                </p>
                <div style={{ marginLeft: '10px' }} onClick={toggleDescShow}>X</div>
            </div>
        </div>
    );
};


export default MobileHeader;