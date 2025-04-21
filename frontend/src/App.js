import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Dashboard />
      </div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        height: '50px', // Set a fixed height for the bottom bar
        backgroundColor: '#f0f0f0' 
      }}>
        <p>selection bar</p>
        <p>selection bar</p>
        <p>selection bar</p>
      </div>
    </div>
  );
}

export default App;
