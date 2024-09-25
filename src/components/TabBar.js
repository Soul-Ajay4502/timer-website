import React from 'react';
import './ComponentStyles/TabBar.css';
import { ReactComponent as HrTabIcon } from '../assets/icons/hr-tab.svg';
import { ReactComponent as LineTabIcon } from '../assets/icons/line-tab.svg';
import { ReactComponent as EmpTabIcon } from '../assets/icons/employe-tab.svg';
import { ReactComponent as SelectedHrTabIcon } from '../assets/icons/hr-tab-selected.svg';
import { ReactComponent as SelectedLineTabIcon } from '../assets/icons/line-tab-selected.svg';
import { ReactComponent as SelectedEmpTabIcon } from '../assets/icons/employe-tab-selected.svg';

const TabBar = ({ tabs, activeTab, onTabClick }) => {
  const renderTabIcon = (tab) => {
    switch (tab) {
      case 'HR':
        return activeTab === 'HR' ? <SelectedHrTabIcon /> : <HrTabIcon />;
      case 'LineManager':
        return activeTab === 'LineManager' ? <SelectedLineTabIcon /> : <LineTabIcon />;
      case 'Employee':
        return activeTab === 'Employee' ? <SelectedEmpTabIcon /> : <EmpTabIcon />;
      default:
        return null;
    }
  };

  const borderColorObj={
    HR:'mob-tab-active-hr',
    LineManager:'mob-tab-active-LineManager',
    Employee:'mob-tab-active-Employee',

  }

  return (
    <div className="tab-container">
      {Object.keys(tabs).map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? `active ${borderColorObj[activeTab]}` : 'mob-not-activ'} mob-tab`}
          style={{
            backgroundColor: activeTab === tab ? tabs[tab].selectedColor : 'white',
          }}
          onClick={() => onTabClick(tab)}
        >
          <div className="tab-icon">{renderTabIcon(tab)}</div>
          {tabs[tab].title}
        </button>
      ))}
    </div>
  );
};

export default TabBar;