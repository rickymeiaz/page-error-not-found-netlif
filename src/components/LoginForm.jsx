import { useState } from 'react';
import axios from 'axios';

const projectID = '8b2829ea-6d51-4c0c-b4cf-cc66c3d242d4';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (error) {
      setError('yahhh salahh :(, cobaa lagii gabole nyerahhh.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">hyyyy :)</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="masukin username kamuu duluu" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="yang ini passwordnyaa" required />
          <div align="center">
            <button type="submit" className="button">
              <span>clickk disiniii </span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;