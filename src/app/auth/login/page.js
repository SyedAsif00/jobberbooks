"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
// import CompanyImg from "../../images/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
import firebase from "firebase/app";
import { auth } from "../../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { Row, Col } from "antd";
import { useRouter } from "next/navigation";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsj, setErrorMsj] = useState("");
  const router = useRouter();

  const handleAuthenticateUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Signed in as:", user.email);
      router.push("../../sales");
    } catch (error) {
      console.error("Error signing in:", error.message);
      const errorMessage = error.message;
      setErrorMsj(errorMessage);
    }
  };
  return (
    <>
      <h1 className={styles.siginTitle}>JobberBooks </h1>
      <Row
        className={styles.signMainRow}
        style={{
          // width: "90%",
          margin: "0 auto",
        }}
      >
        <Col xs={24} md={12} className={styles.leftCol}>
          <div className="bg-white rounded-lg">
            <div className="flex flex-row justify-between mb-4 items-center">
              <h1 className={styles.login}>Login</h1>
              <h1 className={styles.signin}>SignUp</h1>
            </div>

            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                value={email}
                className="w-full p-2 border p-5 focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-medium mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full p-5 border focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button>Forgot Password?</button>
            <br />

            <button
              className={styles.loginBtn}
              onClick={handleAuthenticateUser}
            >
              Login
            </button>
            <div className={styles.errorMessage}>
              {errorMsj && <p>{errorMsj}</p>}
            </div>
          </div>
        </Col>
        <Col xs={24} md={12} className={styles.rightCol}>
          <img
            src={
              "https://getjobber.com/wp-content/uploads/2023/10/Jobber_Youtube-subscriber_Log-in_720x360.jpg"
            }
            alt="getjobberIMG"
            style={{ marginBottom: 10 }}
          />
          <div className={styles.textBold}>
            Score a $1,000 Home Depot gift card
          </div>
          <br />
          <p>
            Join the Jobber community on YouTube for an opportunity to win big!
            Don’t miss out—the contest ends on November 9. Review the full rules
            of this giveaway here:
            https://getjobber.com/youtube-contest-terms-2/
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Login;
