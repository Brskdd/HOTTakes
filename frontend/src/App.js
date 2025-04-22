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
        return <p>Selection1</p>;
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
        backgroundColor: '#f0f0f0'
      }}>
        <p 
          onClick={() => setActiveTab('Dashboard')} 
          style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}
        >
          Dashboard
        </p>
        <p 
          onClick={() => setActiveTab('Selection1')} 
          style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}
        >
          Selection 1
        </p>
        <p 
          onClick={() => setActiveTab('Selection2')} 
          style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}
        >
          Selection 2
        </p>
      </div>
    </div>
  );
}

export default App;