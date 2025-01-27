import React, { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false); // Toggle for reset password form
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/welcome"); // Redirect to Welcome page
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
      setShowForgotPassword(false); // Hide the reset password form
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
       <h2>Login</h2>
      {!showForgotPassword ? (
        // Login Form
        <form className="signup-form" onSubmit={handleLogin}>
         
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          <button
            type="button"
            className="forgot-password-btn"
            onClick={() => setShowForgotPassword(true)} // Show Forgot Password Form
          >
            Forgot Password?
          </button>
        </form>
        
      ) : (
        // Forgot Password Form
        <form className="login-form" onSubmit={handleForgotPassword}>
          <h2>Reset Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
          <button
            type="button"
            className="back-to-login-btn"
            onClick={() => setShowForgotPassword(false)} // Return to Login Form
          >
            Back to Login
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;








// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Details:", { email, password });
//     alert("Logged In Successfully!");
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px", margin: "8px 0" }}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px", margin: "8px 0" }}
//           />
//         </div>
//         <button type="submit" style={{ padding: "10px 20px" }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
