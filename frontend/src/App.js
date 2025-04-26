import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const [token, setToken] = useState(null);

  const tokenhandle = (response) => {
    const resjson = JSON.parse(response);
    const token = resjson.token
    console.log("token: ", token)
    setToken(token);
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          token == null ? (
            <p>user not logged in</p>
          ) : (
            <Dashboard token={token} />
          )

        );
      case 'Profile':
        return (
          token == null ? (
            <LoginForm onLogin={tokenhandle} />
          ) : (
            <p>token {token}</p>
          )
        );
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
          onClick={() => setActiveTab('Profile')}
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