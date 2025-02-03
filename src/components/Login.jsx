import React, { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const username = userData.username;
        navigate(`/welcome/${username}`);
      } else {
        alert("User data not found!");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setErrorMessage(mapAuthError(error.code));
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage("Please enter your email address");
      return;
    }
  
    try {
      const actionCodeSettings = {
        url: `https://projectd-e4f8e.web.app/reset-password`,
        handleCodeInApp: true,
      };
  
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      setSuccessMessage("Password reset email sent! Check your inbox.");
      setErrorMessage("");
      setTimeout(() => {
        setSuccessMessage("");
        setShowForgotPassword(false);
      }, 5000);
    } catch (error) {
      console.error("Password reset error:", error.message);
      setErrorMessage(mapAuthError(error.code));
      setSuccessMessage("");
    }
  };

  const mapAuthError = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "No user found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/invalid-email":
        return "Invalid email format";
      case "auth/too-many-requests":
        return "Too many attempts. Try again later";
      default:
        return "Error occurred. Please try again";
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
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
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
            onClick={() => {
              setShowForgotPassword(false);
              setErrorMessage("");
              setSuccessMessage("");
            }}
          >
            Back to Login
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;