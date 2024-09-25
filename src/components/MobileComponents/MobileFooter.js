import React from "react";
import Logo from '../../assets/icons/app-logo.svg';
import DownArrow from '../../assets/icons/down-arrow-white-icon.svg';
import '../MobileComponents/ComponentStyles/MobileFooter.css';
import InputBox from "../InputBox";
import { ReactComponent as Fb } from '../../assets/icons/facebook.svg';
import { ReactComponent as Insta } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkdedin.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';
import PlayStoreImg from '../../assets/images/PlayStoreImg.png';
import AppStoreImg from '../../assets/images/AppStoreImg.png';
import FooterLogoBsi from '../../assets/images/FooterLogoBsi.png';
import FooterLogoHipaa from '../../assets/images/FooterLogoHipaa.png';
import FooterLogoGdpr from '../../assets/images/FooterLogoGdpr.png';
import FooterLogoAicpa from '../../assets/images/FooterLogoAicpa.png';

const MobileFooter = () => {
    // Dropdown item
    const dropdownItems = [
        "Products",
        "Resources",
        "Discover Introdo",
        "Platform"
    ];

    return (
        <div className="mobile-footer">
            {/* Footer top section with logo, name, and language selector */}
            <div className="mobile-footer-top">
                <img src={Logo} className="mobile-footer-logo" alt="logo" />
                <span className="mobile-footer-text">Introdo</span>
                <div className="mobile-footer-rounded-text">
                    EN
                    <img src={DownArrow} className="down-arrow-icon" alt="down arrow" />
                </div>
            </div>

            {/* Subscription section with input field */}
            <div className="mobile-footer-subscribe">
                HR Updates, straight to your Inbox - Subscribe Today
            </div>
            <InputBox />

            <div className="social-icons">
                <Fb />
                <Insta />
                <LinkedIn />
                <Twitter />
                <Youtube />
            </div>

            <div className="dropdown-section">
                {dropdownItems.map((item, index) => (
                    <>
                        <div key={index} className="dropdown-item">
                            <span className="dropdown-text">{item}</span>
                            <img src={DownArrow} className="down-arrow-icon" alt="down arrow" />
                        </div>
                        <hr className="divider" />
                    </>
                ))}
            </div>

            <div className="mobile-app-text">
                Mobile App
            </div>
            <div className="app-store-section">
                <img src={PlayStoreImg} alt="Play Store" className="app-store-img" />
                <img src={AppStoreImg} alt="App Store" className="app-store-img" />
            </div>

            <div className="footer-logos">
                <div className="footer-logos-row">
                    <img src={FooterLogoBsi} alt="Footer Logo BSI" className="footer-logo" />
                    <img src={FooterLogoBsi} alt="Footer Logo BSI" className="footer-logo" />
                    <img src={FooterLogoHipaa} alt="Footer Logo HIPAA" className="footer-logo" />
                </div>
                <div className="footer-logos-last-row">
                    <img src={FooterLogoGdpr} alt="Footer Logo GDPR" className="footer-logo footer-logo-specific" />
                    <img src={FooterLogoAicpa} alt="Footer Logo AICPA" className="footer-logo footer-logo-specific" />
                </div>
            </div>

            {/* Legal links (privacy policy, terms of use, etc.) */}
            <div className="footer-links">
                <span className="footer-link">Privacy Policy</span>
                <div className="vertical-divider"></div>
                <span className="footer-link">Terms of Use</span>
                <div className="vertical-divider"></div>
                <span className="footer-link">Cookie Policy</span>
            </div>

            <div className="footer-links">
                Copyright © 2024 KPI Group. All Rights Reserved.
            </div>
        </div>
    );
};


export default MobileFooter;
