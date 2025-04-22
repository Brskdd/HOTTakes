import { useState } from 'react';

function BetList() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ display: 'flex', justifyContent: isOpen ? 'flex-end' : 'flex-start', width: isOpen ? '25%' : '15px', backgroundColor: '#101010' }}>
            <div
                style={{ width: "15px", backgroundColor: "#dfdfef", height: "100%", cursor: 'pointer' }}
                onClick={toggleChat}
            >
            </div>
            {isOpen && (
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: "100%", height: "100%", color: 'white' }}>
                    <p>bet list</p>
                    <p>coming soon</p>
                </div>
            )}
        </div>
    );
}

export default BetList;