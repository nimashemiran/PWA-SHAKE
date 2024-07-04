import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  useEffect(() => {
    const handleOrientation = (event) => {
      const { alpha, beta, gamma } = event;

      if ((alpha === 90 && beta === 0 && gamma === -90) || (alpha === 90 && beta === -180 && gamma === -90)) {
        setResult('2 + 2 = 4');
      } else {
        setResult('2 - 2 = 0');
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div className="App">
      <h1>{result}</h1>
    </div>
  );
}

export default App;












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