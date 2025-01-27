import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch the username from Firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const username = userData.username;

        // Redirect to the Welcome page with the username in the route
        navigate(`/welcome/${username}`);
      } else {
        alert("User data not found in Firestore!");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      {!showForgotPassword ? (
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
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot Password?
          </button>
        </form>
      ) : (
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
            onClick={() => setShowForgotPassword(false)}
          >
            Back to Login
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
