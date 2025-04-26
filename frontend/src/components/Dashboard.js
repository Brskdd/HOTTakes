import BetList from "./BetList";
import HomePage from "./HomePage";
import LiveChat from "./LiveChat";

function Dashboard( { token }) {
  return (
    <div>
    <div style={{ display: 'flex', height: "calc(100vh - 51px)" }}>
        <LiveChat />
        <HomePage token={token}/>
        <BetList />
    </div>
    </div>
  );
}

export default Dashboard;