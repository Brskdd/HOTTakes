import LiveChat from "./LiveChat";

function Dashboard() {
  return (
    <div>
    <div style={{ display: 'flex', height: '100vh' }}>
        <LiveChat />
        <div style={{ flex: 1, backgroundColor: '#ffffff' }}></div>
        <div style={{ width: '200px', backgroundColor: '#f0f0f0' }}></div>
    </div>
    </div>
  );
}

export default Dashboard;