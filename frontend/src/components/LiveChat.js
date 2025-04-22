import { useState } from 'react';

function LiveChat() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ display: 'flex', justifyContent: isOpen ? 'flex-end' : 'flex-start', width: isOpen ? '20%' : '15px', backgroundColor: '#101010' }}>
            {isOpen && (
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: "100%", height: "100%", color: 'white' }}>
                    <p>live chat</p>
                    <p>coming soon</p>
                </div>
            )}
            <div
                style={{ width: "15px", backgroundColor: "#dfdfef", height: "100%", cursor: 'pointer' }}
                onClick={toggleChat}
            >
            </div>
        </div>
    );
}

export default LiveChat;