// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../style/SignInFormStyle.css';
// import { AuthContext } from './AuthContext';

// function Login() {
//   const { login } = useContext(AuthContext);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loginAttempts, setLoginAttempts] = useState(0);
//   const [isLockedOut, setIsLockedOut] = useState(false);
//   const [newPassword, setNewPassword] = useState(''); // Define state for newPassword here
//   let navigate = useNavigate();

//   useEffect(() => {
//     let timer;
//     if (isLockedOut) {
//       timer = setTimeout(() => {
//         setIsLockedOut(false);
//         setLoginAttempts(0); // reset attempts after lockout period is over
//       }, 30000); // lockout for 30 seconds
//     }
//     return () => clearTimeout(timer);
//   }, [isLockedOut]);

//   const generatePassword = () => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     const length = 8; // Example length of the new password
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     setNewPassword(result);
//     setError(''); // Clear any existing errors
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (isLockedOut) {
//       setError('Your account is locked. Please try again later.');
//       return;
//     }

//     // Check for 'admin' password or temporary password
//     if (username === 'admin' && (password === 'admin' || password === newPassword)) {
//       login();
//       navigate("/clinical");
//       setError('');
//       // Reset newPassword after successful login
//       if (password === newPassword) {
//         setNewPassword('');
//       }
//     } else {
//       setError('Invalid credentials');
//       const attempts = loginAttempts + 1;
//       setLoginAttempts(attempts);
//       if (attempts >= 3) {
//         setIsLockedOut(true);
//       }
//     }
//   };

//   const handleForgotPassword = () => {
//     generatePassword(); // Generate new password when the user clicks on Forgot Password
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" disabled={isLockedOut}>Login</button>
//         <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
//         {newPassword && (
//           <div>
//             <p>Your new password is: <strong>{newPassword}</strong></p>
//             <p>Please change it after logging in.</p>
//           </div>
//         )}
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Login;



import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../style/SignInFormStyle.css';
import { AuthContext } from './AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isLockedOut) {
      timer = setTimeout(() => {
        setIsLockedOut(false);
        setLoginAttempts(0);
      }, 30000);
    }
    return () => clearTimeout(timer);
  }, [isLockedOut]);

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 8;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isLockedOut) {
      setError('Your account is locked. Please try again later.');
      return;
    }

    if (username === 'harshalishinde267@gmail.com' && (password === 'admin' || password === newPassword)) {
      login();
      navigate("/clinical");
      setError('');
      if (password === newPassword) {
        setNewPassword('');
      }
    } else {
      setError('Invalid credentials');
      const attempts = loginAttempts + 1;
      setLoginAttempts(attempts);
      if (attempts >= 3) {
        setIsLockedOut(true);
      }
    }
  };


  const handleForgotPassword = async () => {
    const generatedPassword = generatePassword();
    setNewPassword(generatedPassword);

    const templateParams = {
      to_name: username,
      new_password: generatedPassword, // Corrected placeholder
    };

    const user_id = 'WOw_kZ4Xz_bF2q6xZ';
    const service_id = 'service_37c6wiz';
    const template_id = 'template_yvrloz6';

    try {
      const response = await emailjs.send(service_id, template_id, templateParams, user_id);
      console.log('Email successfully sent:', response.status, response.text);
      alert('A new password has been sent to your email.');
      setError('');
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send the email. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isLockedOut}>Login</button>
        <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;








//template_rxmwl68