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

// App.js
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count - 1)}>➖</button>
      <button onClick={() => setCount(count + 1)}>➕</button>
    </div>
  );
}

export default App;
