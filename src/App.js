import React, { useEffect, useState } from 'react';
import './App.css';

const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD',
  '#2ECC71', '#E74C3C', '#3498DB', '#F39C12', '#9B59B6'
];

function App() {
  const [color, setColor] = useState(colors[0]);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const handleMotionEvent = (event) => {
      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) {
        return;
      }

      const { x, y, z } = acceleration;

      if (x > 15 || y > 15 || z > 15) {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor);
        setShake(true);
      }
    };

    window.addEventListener('devicemotion', handleMotionEvent);

    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  }, []);

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500); // Remove shake class after animation duration
      return () => clearTimeout(timer);
    }
  }, [shake]);

  return (
    <div className={`App ${shake ? 'shake' : ''}`} style={{ backgroundColor: color, height: '100vh' }}>
      <h1>{color}</h1>
    </div>
  );
}

export default App;









// import React, { useEffect, useState } from 'react';
// import './App.css';

// const colors = [
//   '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD',
//   '#2ECC71', '#E74C3C', '#3498DB', '#F39C12', '#9B59B6'
// ];

// function App() {
//   const [color, setColor] = useState(colors[0]);

//   useEffect(() => {
//     let lastX = null;
//     let lastY = null;
//     let lastZ = null;

//     const handleMotionEvent = (event) => {
//       const acceleration = event.acceleration || event.accelerationIncludingGravity;
//       if (!acceleration) {
//         return;
//       }

//       const { x, y, z } = acceleration;

//       if (lastX !== null && lastY !== null && lastZ !== null) {
//         const deltaX = Math.abs(x - lastX);
//         const deltaY = Math.abs(y - lastY);
//         const deltaZ = Math.abs(z - lastZ);

//         if (deltaX > 1 || deltaY > 1 || deltaZ > 1) {
//           const newColor = colors[Math.floor(Math.random() * colors.length)];
//           setColor(newColor);
//         }
//       }

//       lastX = x;
//       lastY = y;
//       lastZ = z;
//     };

//     window.addEventListener('devicemotion', handleMotionEvent);

//     return () => {
//       window.removeEventListener('devicemotion', handleMotionEvent);
//     };
//   }, []);

//   return (
//     <div className="App" style={{ backgroundColor: color, height: '100vh' }}>
//       <h1>{color}</h1>
//     </div>
//   );
// }

// export default App;










// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [result, setResult] = useState('nima');

//   useEffect(() => {
//     const handleOrientationChange = () => {
//       const orientationType = window.screen.orientation.type;

//       if (orientationType.includes('landscape')) {
//         setResult('2 + 2 = 4');
//       } else if (orientationType.includes('portrait')) {
//         setResult('2 - 2 = 0');
//       } else {
//         setResult('nima');
//       }
//     };

//     window.screen.orientation.addEventListener('change', handleOrientationChange);

//     // Check initial orientation
//     handleOrientationChange();

//     return () => {
//       window.screen.orientation.removeEventListener('change', handleOrientationChange);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>{result}</h1>
//     </div>
//   );
// }

// export default App;

















// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [result, setResult] = useState('');

//   useEffect(() => {
//     const handleOrientation = (event) => {
//       const { alpha, beta, gamma } = event;

//       if ((alpha === 90 && beta === 0 && gamma === -90) || (alpha === 90 && beta === -180 && gamma === -90)) {
//         setResult('2 + 2 = 4');
//       } else {
//         setResult('2 - 2 = 0');
//       }
//     };

//     window.addEventListener('deviceorientation', handleOrientation);

//     return () => {
//       window.removeEventListener('deviceorientation', handleOrientation);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>{result}</h1>
//     </div>
//   );
// }

// export default App;






// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [orientation, setOrientation] = useState('عمودی');

//   useEffect(() => {
//     const handleOrientation = (event) => {
//       const { beta } = event;
//       // beta در حدود 0 یعنی دستگاه در حالت افقی است
//       // beta در حدود ±90 یعنی دستگاه در حالت عمودی است
//       if (beta > 45 || beta < -45) {
//         setOrientation('عمودی');
//       } else {
//         setOrientation('افقی');
//       }
//     };

//     window.addEventListener('deviceorientation', handleOrientation);

//     return () => {
//       window.removeEventListener('deviceorientation', handleOrientation);
//     };
//   }, []);

//   return (
//     <div className="App">
//       {orientation === 'افقی' ? (
//         <h1>2 + 2 = 4</h1>
//       ) : (
//         <h1>2 - 2 = 0</h1>
//       )}
//     </div>
//   );
// }

// export default App;









// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [orientation, setOrientation] = useState('عمودی');

//   useEffect(() => {
//     const handleOrientation = (event) => {
//       const { beta } = event;
//       // beta در حدود 0 یعنی دستگاه در حالت افقی است
//       // beta در حدود ±90 یعنی دستگاه در حالت عمودی است
//       if (beta > 45 || beta < -45) {
//         setOrientation('عمودی');
//       } else {
//         setOrientation('افقی');
//       }
//     };

//     window.addEventListener('deviceorientation', handleOrientation);

//     return () => {
//       window.removeEventListener('deviceorientation', handleOrientation);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>جهت دستگاه: {orientation}</h1>
//     </div>
//   );
// }

// export default App;