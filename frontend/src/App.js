import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Selection1':
        return <p>Profile</p>;
      case 'Selection2':
        return <p>Selection2</p>;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        {renderContent()}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '50px',
        backgroundColor: '#f0f0f0',
        borderTop: "1px solid white"
      }}>
        <div 
          onClick={() => setActiveTab('Dashboard')} 
          style={{
            backgroundColor: "#101010",
            color: 'white',
            flex: 1,
            textAlign: 'center',
            cursor: 'pointer',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#303030'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#101010'}
        >
          Dashboard
        </div>
        <div 
          onClick={() => setActiveTab('Selection1')} 
          style={{
            backgroundColor: "#101010",
            color: 'white',
            flex: 1,
            textAlign: 'center',
            cursor: 'pointer',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#303030'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#101010'}
        >
          Profile
        </div>
        <div 
          onClick={() => setActiveTab('Selection2')} 
          style={{
            backgroundColor: "#101010",
            color: 'white',
            flex: 1,
            textAlign: 'center',
            cursor: 'pointer',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#303030'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#101010'}
        >
          Selection 2
        </div>
      </div>
    </div>
  );
}

export default App;