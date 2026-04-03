import React, { useState } from 'react';

const DailyDarood = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < 1000) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            <h1>Daily Darood Counter</h1>
            <p>You have recited Darood: {count} / 1000</p>
            <button onClick={handleIncrement}>Recite Darood</button>
        </div>
    );
};

export default DailyDarood;