import { useState } from 'react';

function LoginForm({ onLogin }) {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    await handleSubmit("http://localhost:5000/api/login"); // Call handleSubmit to perform the login
  }

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    await handleSubmit("http://localhost:5000/api/register"); // Call handleSubmit to perform the login
  }

  const handleSubmit = async (url) => {

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.text(); // Use response.text() for plain text responses
      console.log('Login successful:', data);
      onLogin(data); // Pass the response string to the parent component
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "calc(100vh - 51px)" }}>
      <div style={{ width: '300px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center' }}>Login or Register</h2>
        <form>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <button
            onClick={handleLogin}
            style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px' }}
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px' }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
