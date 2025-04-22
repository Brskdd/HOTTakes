import BetList from "./BetList";
import LiveChat from "./LiveChat";

function Dashboard() {
  return (
    <div>
    <div style={{ display: 'flex', height: "calc(100vh - 51px)" }}>
        <LiveChat />
        <div style={{ flex: 1, backgroundColor: '#ffffff' }}></div>
        <BetList />
    </div>
    </div>
  );
}

export default Dashboard;