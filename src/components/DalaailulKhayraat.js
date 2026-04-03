import React, { useState } from 'react';

const DalaailulKhayraat = () => {
    const userNames = ['MAMI', 'ZAHID', 'ZEENAT', 'MADEEHA', 'AISHA', 'HASHIM',
        'FAIZAL', 'RAZIA', 'AZHAR', 'ANAS', 'YASSER', 'SHANE', 'FAATIMA',
        'AJMAL', 'QAADIR', 'UZAIRAH', 'ASAD', 'FARZANA', 'RESHAD', 'ZAHIRA',
        'ARSHAD', 'ZAHIA', 'ASHAF', 'MINOU', 'AZHAR D', 'NASHREEN',
        'SHABNEEZ', 'AZHAR L', 'CHACHI SHIRIN', 'YAASIR'];

    const [adminPassword, setAdminPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleAdminLogin = () => {
        if (adminPassword === '1234') {
            setIsAdmin(true);
        } else {
            alert('Incorrect Admin Password');
        }
    };

    const handleLogout = () => {
        setIsAdmin(false);
        setAdminPassword('');
    };

    return (
        <div>
            <h1>Dalaailul Khayraat</h1>
            {!isAdmin ? (
                <div>
                    <h2>Admin Login</h2>
                    <input 
                        type="password"  
                        value={adminPassword} 
                        onChange={(e) => setAdminPassword(e.target.value)} 
                        placeholder="Enter Admin Password" 
                    />
                    <button onClick={handleAdminLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h2>Welcome Admin</h2>
                    <button onClick={handleLogout}>Logout</button>
                    <h3>User Tracking Boxes</h3>
                    {userNames.map(user => (
                        <div key={user}>
                            <input type="checkbox" /> {user}
                        </div>
                    ))}
                    <button onClick={() => alert('Resetting user boxes...')}>Reset</button>
                </div>
            )}
        </div>
    );
};

export default DalaailulKhayraat;