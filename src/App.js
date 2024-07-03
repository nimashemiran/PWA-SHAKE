import React, { useEffect, useState } from 'react';
import './App.css';
import Shake from 'shake.js';

function App() {
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    const myShakeEvent = new Shake({
      threshold: 15, // شدت لرزش برای تشخیص
      timeout: 1000 // زمان بین دو لرزش متوالی
    });

    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);

    function shakeEventDidOccur() {
      // تغییر رنگ پس‌زمینه
      setBgColor(getRandomColor());
    }

    return () => {
      myShakeEvent.stop();
      window.removeEventListener('shake', shakeEventDidOccur, false);
    };
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Shake Challenge</h1>
    </div>
  );
}

export default App;

