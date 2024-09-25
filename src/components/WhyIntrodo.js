import React, { useState } from 'react';
import './ComponentStyles/WhyIntrodo.css';
import Flag1 from '../assets/images/FlagAED.png';
import Flag2 from '../assets/images/FlagSAD.png';
import Flag3 from '../assets/images/FlagOMG.png';
import { ReactComponent as Loader } from '../assets/icons/loader.svg';
import Flag from '../assets/images/AppStoreImg.png';
import CloudCardImage from '../assets/images/CloudCardImage.png';
import Compliance from '../assets/images/CompliancesGraphic.png';
import LegacyHarmonyGraphic from '../assets/images/LegacyHarmonyGraphic.png';
import { ReactComponent as MsIcon } from '../assets/icons/msIcon.svg';
import { ReactComponent as Fathima } from '../assets/icons/fathima.svg';
import { ReactComponent as UpArrow } from '../assets/icons/up-arrow-icon.svg';

import TimerComponent from './TimerComponent';

// Data for all the cards
const cardDataArray = [
  {
    id: 1,
    heading: 'Global Payroll Simplicity',
    description: 'Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!',
    flagData: [
      { id: 1, flagSrc: Flag1, loader: <Loader />, amount: 'AED 90,718.94' },
      { id: 2, flagSrc: Flag2, loader: <Loader />, amount: 'SAR 678,100.00' },
      { id: 3, flagSrc: Flag3, loader: <Loader />, amount: 'OMR 67,693.80' },
    ],
  }, {
    id: 2,
    heading: 'Smart Insights',
    description: 'Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.',
  },
  {
    id: 3,
    heading: 'Legacy Harmony',
    description: 'Maximize operational efficiency with zero data loss. Sync all your business tools with an open API for seamless data integration.',
    icons: {
      row1: [<MsIcon />, <MsIcon />],
      row2: [<MsIcon />, <MsIcon />, <MsIcon />],
      row3: [<MsIcon />, <MsIcon />,],
    },
  },

  {
    id: 4,
    heading: 'Rock-Solid Compliance',
    description: 'Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.',
    flagSrc: Flag,
  },
  {
    id: 5,
    heading: 'Cloud-Powered Savings',
    description: 'Centralize people management with one HR software. Save time and cut costs by leveraging cloud technology.',
    imageSrc: CloudCardImage,
  },
];

// PerkCards Component
const PerkCards = ({ heading = '', desc = '', flagData = [], icons = [], gradientClass = '', bgImage, bgImagePosition, imgDivStyle, imgStyle, descStyle, ...rest }) => (
  <div className={`why-intro-box ${gradientClass}`} style={{ margin: '5px', ...rest }}>
    {/* Conditionally rendering the image based on position */}
    {(bgImagePosition === 'top' || bgImagePosition === 'left') &&
      <div style={imgDivStyle}><img src={bgImage} style={imgStyle} alt={heading} /></div>
    }
    <div style={descStyle}><h3>{heading}</h3>
      <p>{desc}</p>
    </div>
    {/* Display Flags */}
    {flagData.length > 0 && (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="payroll-card" style={{ position: 'relative', width: '250px', }}>
          {flagData.map(({ id, flagSrc, loader, amount }) => (
            <div className="payroll-card-row" key={id}>
              <img src={flagSrc} alt={`Flag ${id}`} className="flag-icon" />
              {loader}
              <span style={{ fontSize: '8.67px', color: 'rgba(23, 12, 52, 1)', fontWeight: '400', fontFamily: 'MonaSansMedium' }}>{amount}</span>
            </div>
          ))}
          {/* Adding background layers for visual effects */}
          <div className="payroll-card-background"></div>
          <div className="payroll-card-background-light"></div>
        </div>

      </div>
    )}

    {(bgImagePosition === 'right' || bgImagePosition === 'bottom') &&
      <div style={imgDivStyle}><img src={bgImage} style={imgStyle} alt={heading} /></div>
    }
  </div>
);

const UserDetails = ({ name = 'Fatima Saleem', date = 'Aug 07, 2024 - Aug 15, 2024' }) => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: '5%',
      borderBottom: '1px solid #EDE9F3'
    }}>
      {/* User icon and details */}
      <div>
        <Fathima />
      </div>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: '16px', color: 'rgba(23, 12, 52, 1)', fontWeight: '600', fontFamily: 'Archivo' }}>{name}</div>
        <div style={{ fontSize: '10.24px', color: 'rgba(111, 104, 129, 1)', fontWeight: '400', fontFamily: 'MonaSansLight', marginTop: '10px' }}>{`(${date})`}</div>
      </div>
    </div>
  )
}

const SplitedPerkCard = () => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      {/* Top section with gradient and progress display */}
      <div className='smart-insights-top-gradient' style={{ borderRadius: '32px', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          width: '94px',
          height: '39.29px',
          background: '#3F1C74',
          top: '25%',
          right: '18%',
          borderRadius: '100px',
          color: '#EBF3FF',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Display progress percentage */}
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(235, 243, 255, 1)', fontFamily: 'MonaSansBold' }}>{Math.round(progressPercentage)}%</div>
          <UpArrow style={{ marginLeft: '8px' }} />
        </div>
        <div style={{ backgroundColor: '#fff', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', padding: '10%', marginTop: '35%' }}>
          {/* User details and Timer component */}
          <UserDetails />
          <TimerComponent
            progressPercentage={progressPercentage}
            setProgressPercentage={setProgressPercentage}
          />
        </div>
      </div>
      {/* Bottom section with insights information */}
      <div className='smart-insights-gradient' style={{ borderRadius: '32px' }}>
        <div style={{ fontSize: '31.25px', fontWeight: 600, color: '#241042', marginBottom: '16px', fontFamily: 'Archivo' }}>Smart Insights</div>
        <div style={{ fontSize: '16px', color: '#433A5B', fontFamily: 'MonaSansMedium', lineHeight: "24px" }}>Craft customized reports and dashboards to steer data-driven decisions.
          All your historic employee data within one end-to-end solution.
        </div>
      </div>

    </div>
  )
}

// Configuration objects for dynamic class and style management
const gradientClassObj = {
  1: 'payroll-gradient',
  2: 'payroll-gradient',
  3: 'legacy-harmony',
  4: 'rock-solid-compliance',
  5: 'cloud-powered-savings'
}
const bgImagesObj = {
  1: '',
  2: '',
  3: LegacyHarmonyGraphic,
  4: Compliance,
  5: CloudCardImage
}
const imgDivStyleObj = {
  1: { width: '50%' },
  2: { width: '50%' },
  3: { width: '100%' },
  4: { width: '50%' },
  5: { width: '50%', display: 'flex' }
}

const imgStyleObj = {
  1: { width: '100%', height: '100%' },
  2: { width: '100%', height: '100%' },
  3: { width: '100%', height: '100%' },
  4: { width: '100%' },
  5: { width: '240%' }
}
const descStyleObj = {
  1: { padding: '40px', paddingTop: 0 },
  3: { padding: '40px' },
  4: { width: '75%', padding: '40px' },
  5: { width: '75%', padding: '40px' }
}
const imgPositions = {
  3: 'bottom',
  4: 'right',
  5: 'left'
}

// Main Component: WhyIntrodo
const WhyIntrodo = () => {
  return (
    <div style={{ paddingTop: '10%' }}>
      <h2 className="why-intro-title">WHY INTRODO?</h2>
      <h1 className="why-intro-benefits-title">Unlock The Perks!</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%' }}>
          {/* Rendering different card components based on data */}
          {cardDataArray.map(({ id, heading, description, flagData, icons }) => (
            <div className='perk-card-container' style={{ width: id <= 3 ? '352px' : '48%', marginTop: '20px' }} key={id}>
              {id !== 2 ?
                <PerkCards
                  heading={heading}
                  desc={description}
                  flagData={flagData}
                  icons={icons}
                  gradientClass={gradientClassObj[id]}
                  bgImage={bgImagesObj[id]}
                  bgImagePosition={imgPositions[id]}
                  imgStyle={imgStyleObj[id]}
                  imgDivStyle={imgDivStyleObj[id]}
                  descStyle={descStyleObj[id]}
                  justifyContent={id === 1 ? 'space-around' : 'space-between'}
                  height='100%'

                /> : <SplitedPerkCard />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyIntrodo;
