"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import { auth } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./signup.module.css";
import { Row, Col } from "antd";
import Image from "next/image";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsj, setErrorMsj] = useState(null);

  const handleCreateUser = async () => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered successfully:", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsj(errorMessage);
      console.error("Registration error:", errorCode, errorMessage);
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
              {/* <h1 className={styles.login}>Login</h1> */}
              <h1 className={styles.signin}>Sign up</h1>
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

            <button className={styles.loginBtn} onClick={handleCreateUser}>
              SignUp
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

  // return (
  //   <div className="flex items-center justify-center h-screen">
  //     <div className="w-[900px] h-[400px] grid grid-cols-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md">
  // <div className="bg-white p-8 rounded-lg">
  //   <h2 className="text-3xl font-semibold mb-4 text-gray-800">Sign Up</h2>

  //   <div className="mb-4">
  //     <label className="block text-gray-800 text-sm font-medium mb-2">
  //       Email
  //     </label>
  //     <input
  //       type="text"
  //       value={email}
  //       className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //   </div>
  //   <div className="mb-4">
  //     <label className="block text-gray-800 text-sm font-medium mb-2">
  //       Password
  //     </label>
  //     <input
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //       type="password"
  //       className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
  //     />
  //   </div>
  //   <button onClick={handleCreateUser}>Enter</button>
  // </div>
  //       <div className="flex items-center justify-center">
  // <div className="text-white text-center">
  //   <p>lorem ipsum doler set imet</p>
  // </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default SignUp;
