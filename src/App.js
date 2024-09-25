import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import './App.css';
import MobileHeader from './components/MobileComponents/MobileHeader';
import MobileFooter from './components/MobileComponents/MobileFooter';

function App() {

  React.useEffect(() => {
    // Scroll to the top of the page when the component is mounted (typically on page refresh or route change)
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      {/* Fixed header for larger screens */}
      <div className='global-header' style={{ position: 'fixed', width: '100%', backgroundColor: '#fff', zIndex: 1000 }}>
        <Header />
      </div>

      {/* Fixed header for mobile screens */}
      <div className='mobile-header' style={{ position: 'fixed', width: '100%', backgroundColor: '#fff', zIndex: 1000 }}>
        <MobileHeader />
      </div>

      {/* Main content section */}
      <div className='landing'>
        <LandingPage />
      </div>

      {/* Footer for larger screens */}
      <div className='global-footer'>
        <Footer />
      </div>

      {/* Footer for mobile screens */}
      <div className='mobile-footer' style={{marginTop:'30px'}}>
        <MobileFooter />
      </div>
    </div>
  );
}

export default App;
