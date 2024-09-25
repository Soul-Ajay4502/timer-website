import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './LandingPage.css';
import TabBar from '../components/TabBar';
import HRBoxContainer from '../components/HRBoxContainer';
import LineManagerBoxContainer from '../components/LineManagerBoxContainer';
import EmployeeBoxContainer from '../components/EmployeeBoxContainer';
import WhyIntrodo from '../components/WhyIntrodo';
import { ReactComponent as ChatIcon } from '../assets/icons/chat-icon.svg';
import { ReactComponent as HrMsg } from '../assets/icons/hr-messages.svg';
import { ReactComponent as HrPrgrmArrow } from '../assets/icons/hr-programming-arrows.svg';
import { ReactComponent as HrEdit } from '../assets/icons/hr-edit-2.svg';
import { ReactComponent as LineMsg } from '../assets/icons/line-edit-2.svg';
import { ReactComponent as LinePrgrmArrow } from '../assets/icons/line-programming-arrows.svg';
import { ReactComponent as LineEdit } from '../assets/icons/line-edit-2.svg';
import { ReactComponent as EmpMsg } from '../assets/icons/emp-edit-2.svg';
import { ReactComponent as EmpPrgrmArrow } from '../assets/icons/emp-programming-arrows.svg';
import { ReactComponent as EmpEdit } from '../assets/icons/emp-edit-2.svg';

const TabDescription = ({ data = [], borderColor }) => {
  return (
    <div className='landing-desc-container' style={{ display: 'flex', flexDirection: 'column', marginRight: '7%', width: '22%' }}>
      {data.map((item) => (
        <div
          className='landing-desc'
          style={{
            display: 'flex',
            textAlign: 'left',
            borderTop: item.id === 2 ? `1px solid ${borderColor}` : '',
            borderBottom: item.id === 2 ? `1px solid ${borderColor}` : '',
            paddingTop: '10%',
            paddingBottom: '10%',
          }}
          key={item.id}
        >
          <div style={{ marginRight: '10px' }}>{item.icon}</div>
          <div style={{
            fontFamily: 'MonaSansMedium',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.02em',
            color: 'rgba(54, 24, 99, 1)'
          }}>
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

// Data for HR tab descriptions
const hrDescriptionData = [
  { id: 1, desc: 'Streamline Workforce Management', icon: <HrMsg /> },
  { id: 2, desc: 'Smooth Employee Onboarding', icon: <HrPrgrmArrow /> },
  { id: 3, desc: 'Enhance Internal Communication', icon: <HrEdit /> }
];

// Data for Line Manager tab descriptions
const lineManagerDescriptionData = [
  { id: 1, desc: 'Streamline Workforce Management', icon: <LineMsg /> },
  { id: 2, desc: 'Smooth Employee Onboarding', icon: <LinePrgrmArrow /> },
  { id: 3, desc: 'Enhance Internal Communication', icon: <LineEdit /> }
];

// Data for Employee tab descriptions
const employeeDescriptionData = [
  { id: 1, desc: 'Streamline Workforce Management', icon: <EmpMsg /> },
  { id: 2, desc: 'Smooth Employee Onboarding', icon: <EmpPrgrmArrow /> },
  { id: 3, desc: 'Enhance Internal Communication', icon: <EmpEdit /> }
];

// Main component for the Landing Page
const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('HR');
  const autoSwitchInterval = useRef(null); // Create a ref for the interval

  // useMemo to memoize the tabs object
  const tabs = useMemo(() => ({
    HR: {
      title: 'For HR Managers',
      content: [
        'Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping.',
        'Simplify onboarding, capture essential employee data and automate payroll for seamless employee experiences.',
        'Facilitate company-wide communication, keeping everyone in the loop with important announcements, subsidiary changes and HR policy updates.'
      ],
      layer1Color: 'rgba(129, 178, 255, 1)',
      layer2Color: 'rgba(164, 199, 255, 1)',
      layer3Color: 'rgba(255, 255, 255, 1)',
      selectedColor: 'rgba(58, 134, 255, 1)',
    },
    LineManager: {
      title: 'For Line Managers',
      content: [
        'Simplify task management for a boost in team productivity. Clear assignments, monitored deadlines and smoother workflows await!',
        'Welcome new team members with ease – our automated workflows minimize admin hassle for quick integration into team dynamics.',
        'Keep the team engaged and informed on project milestones, fostering a positive, motivated environment for collaborative success.'
      ],
      layer1Color: 'rgba(105, 72, 154, 1)',
      layer2Color: 'rgba(138, 112, 176, 1)',
      layer3Color: 'rgba(255, 255, 255, 1)',
      selectedColor: 'rgba(54, 24, 99, 1)',
    },
    Employee: {
      title: 'For Employees',
      content: [
        'Get clarity on tasks, access key information and perform tasks independently, fostering a culture of trust and ownership.',
        'Experience a pain-free onboarding experience with timely and accurate payroll processes – a positive start to your new role!',
        'Stay connected with real-time updates, polls, and surveys through our HRMS for an engaging and informed experience.'
      ],
      layer1Color: 'rgba(255, 174, 92, 1)',
      layer2Color: 'rgba(255, 197, 138, 1)',
      layer3Color: 'rgba(255, 255, 255, 1)',
      selectedColor: 'rgba(255, 129, 0, 1)',
    }
  }), []); 

  // useCallback to memoize switchTabs
  const switchTabs = useCallback(() => {
    const tabKeys = Object.keys(tabs);
    const currentIndex = tabKeys.indexOf(activeTab); 
    const nextIndex = (currentIndex + 1) % tabKeys.length; 
    setActiveTab(tabKeys[nextIndex]);
  }, [activeTab, tabs]);

  // Function to handle manual tab click and stop auto-switching
  const handleTabClick = (tab) => {
    clearInterval(autoSwitchInterval.current);
    setActiveTab(tab);
  };

  // useEffect hook to set the auto-switching functionality when the component mounts
  useEffect(() => {
    autoSwitchInterval.current = setInterval(switchTabs, 5000); // Set auto-switch interval to 5 seconds
    return () => clearInterval(autoSwitchInterval.current); // Clear interval when the component unmounts
  }, [switchTabs]); // Include switchTabs in the dependency array

  return (
    <div className="landing-page">
      <h2 className="empower-title">EMPOWER EVERY ROLE</h2>
      <h1 className="benefits-title">Triple The Benefits!</h1>
      <TabBar tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      {activeTab === 'HR' && (
        <div style={{ display: 'flex', width: '77%' }}>
          <TabDescription data={hrDescriptionData} borderColor={tabs.HR.selectedColor} />
          <HRBoxContainer tabs={tabs} activeTab={activeTab} />
        </div>
      )}

      {/* Content for Line Manager tab */}
      {activeTab === 'LineManager' && (
        <div style={{ display: 'flex', width: '77%' }}>
          <TabDescription data={lineManagerDescriptionData} borderColor={tabs.LineManager.selectedColor} />
          <LineManagerBoxContainer tabs={tabs} activeTab={activeTab} />
        </div>
      )}

      {/* Content for Employee tab */}
      {activeTab === 'Employee' && (
        <div style={{ display: 'flex', width: '77%' }}>
          <TabDescription data={employeeDescriptionData} borderColor={tabs.Employee.selectedColor} />
          <EmployeeBoxContainer tabs={tabs} activeTab={activeTab} />
        </div>
      )}

      {/* WhyIntrodo component section */}
      <WhyIntrodo />

      {/* Vertical text for demo scheduling */}
      <div className="vertical-text">Schedule a Demo</div>

      {/* Chat button */}
      <div className="chat-circle">
        <ChatIcon />
      </div>
    </div>
  );
};

export default LandingPage;
