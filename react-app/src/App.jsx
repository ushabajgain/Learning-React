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


// practice login form code 

import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials
    const dummyEmail = 'test@example.com';
    const dummyPassword = '123456';

    if (email === dummyEmail && password === dummyPassword) {
      setMessage('✅ Login Successful!');
    } else {
      setMessage('❌ Invalid Email or Password');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h1>🔐 Login</h1>
      <form onSubmit={handleLogin} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%' }}>Login</button>
      </form>
      <h3 style={{ marginTop: '20px' }}>{message}</h3>
    </div>
  );
}

export default App;
