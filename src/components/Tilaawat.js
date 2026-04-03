import React, { useState } from 'react';

const Tilaawat = () => {
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [userTicks, setUserTicks] = useState(Array(30).fill(0).map(() => Array(30).fill(false)));
  const [weeklyCounter, setWeeklyCounter] = useState(0);

  const userNames = [
    'User 1', 'User 2', 'User 3', 'User 4', 'User 5',
    'User 6', 'User 7', 'User 8', 'User 9', 'User 10',
    'User 11', 'User 12', 'User 13', 'User 14', 'User 15',
    'User 16', 'User 17', 'User 18', 'User 19', 'User 20',
    'User 21', 'User 22', 'User 23', 'User 24', 'User 25',
    'User 26', 'User 27', 'User 28', 'User 29', 'User 30',
  ];

  const handleCheckboxChange = (userIndex, tickIndex) => {
    const updatedTicks = [...userTicks];
    updatedTicks[userIndex][tickIndex] = !updatedTicks[userIndex][tickIndex];

    // Update week counter based on checked ticks
    const currentTickCount = updatedTicks.flat().filter(Boolean).length;
    setWeeklyCounter(currentTickCount);
    setUserTicks(updatedTicks);
  };

  const handleLogin = () => {
    if (password === '1234') {
      setIsAdmin(true);
    } else {
      alert('Incorrect password');
    }
  };

  const resetWeekly = () => {
    setUserTicks(Array(30).fill(0).map(() => Array(30).fill(false)));
    setWeeklyCounter(0);
  };

  const resetMonthly = () => {
    // Implement monthly reset logic if required
  };

  return (
    <div>
      <h1>Tilaawat Tracker</h1>
      {!isAdmin ? (
        <div>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter admin password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Weekly Counter: {weeklyCounter}</h2>
          {userNames.map((name, userIndex) => (
            <div key={userIndex}>
              <h3>{name}</h3>
              {Array.from({ length: 30 }).map((_, tickIndex) => (
                <div key={tickIndex}>
                  <input 
                    type="checkbox" 
                    checked={userTicks[userIndex][tickIndex]} 
                    onChange={() => handleCheckboxChange(userIndex, tickIndex)} 
                  />
                </div>
              ))}
            </div>
          ))}
          <button onClick={resetWeekly}>Reset Weekly</button>
          <button onClick={resetMonthly}>Reset Monthly</button>
          <p>Hadith Quote: "The one who guides to good has a reward similar to that of the one who performs it." - Tirmidhi 2910</p>
        </div>
      )}
    </div>
  );
};

export default Tilaawat;
