// practice code for React App
// const App=()=>{
//   return(
//     <>
//     <h1>Hello React Developers</h1>
//     <p>Welcome to the world of React!</p>
//     <p>Let's build amazing applications together.</p>
//     <p>Happy coding!</p>
//     <p>Enjoy your journey with React.</p>
//     </>
    
//   )
// }
// export default App;



// practice code for React App with a simple counter
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count - 1)}>➖</button>
//       <button onClick={() => setCount(count + 1)}>➕</button>
//     </div>
//   );
// }

// export default App;


// // practice code for React App with a simple To-Do List
// import { useState } from 'react';

// function App() {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (task.trim() !== '') {
//       setTasks([...tasks, task]);
//       setTask('');
//     }
//   };

//   const removeTask = (indexToRemove) => {
//     setTasks(tasks.filter((_, index) => index !== indexToRemove));
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '30px' }}>
//       <h1>📝 To-Do List</h1>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={addTask}>Add</button>

//       <ul style={{ listStyle: 'none' }}>
//         {tasks.map((t, i) => (
//           <li key={i}>
//             {t} <button onClick={() => removeTask(i)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// // practice code for React App with a simple Celsius to Fahrenheit converter
// import { useState } from 'react';

// function App() {
//   const [celsius, setCelsius] = useState('');

//   const fahrenheit = celsius ? (parseFloat(celsius) * 9) / 5 + 32 : '';

//   return (
//     <div style={{ textAlign: 'center', marginTop: '40px' }}>
//       <h1>🌡️ Celsius to Fahrenheit</h1>
//       <input
//         type="number"
//         value={celsius}
//         onChange={(e) => setCelsius(e.target.value)}
//         placeholder="Enter °C"
//       />
//       <h2>{celsius && `${fahrenheit}°F`}</h2>
//     </div>
//   );
// }

// export default App;

// practice code for React App with a simple dice roll game
import { useState } from 'react';

function App() {
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setDice(value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>🎲 Dice Roll</h1>
      <h2>You rolled: {dice}</h2>
      <button onClick={rollDice}>Roll</button>
    </div>
  );
}

export default App;

