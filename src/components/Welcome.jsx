import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Welcome() {
  const { username } = useParams(); // Get the username from route params
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = auth.currentUser;

      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="welcome-container">
      <h1>Welcome, {userDetails.username || "User"}!</h1>
    </div>
  );
}

export default Welcome;
