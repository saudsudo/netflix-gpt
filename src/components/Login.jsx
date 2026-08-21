import React, { useRef, useState } from "react";
import Header from "./Header";
import { credValidations } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/reduxStore/userSlice";

import {bgLogin} from '../utils/constants';

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const [messageErr, setmessageErr] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignin = () => {
    setisSignin(!isSignin);
  };

  //Submit=> Validation => Authentication (signup/signin)
  const handleLogin = () => {
    const message = credValidations(
      email.current.value,
      password.current.value,
    );
    setmessageErr(message);

    if (message) return;

    if (!isSignin) {
      //sign-up form

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(JSON.stringify(user));
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
       
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmessageErr(errorCode + " => " + errorMessage);

          // ..
        });
    }
    if (isSignin) {
      //Signin

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(JSON.stringify(user));
     
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmessageErr(errorCode + " => " + errorMessage);
        });
    }
  };

  //JSX Render
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute">
        <img
          src={bgLogin}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 h-4/6 bg-black bg-opacity-80 border-b-3 rounded-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <h1 className="text-4xl ml-8 mt-10 mb-8 ">
          {isSignin ? "Sign in" : "Sign up"}{" "}
        </h1>
        <h2 className="text-l ml-8 mt-2 mb-2 text-red-600 ">{messageErr} </h2>
        <div className=" flex flex-col justify-center items-center">
          {/* <h1 className="text-xl px-5"> Email </h1> */}

          {!isSignin ? (
            <input
              ref={name}
              type="text"
              placeholder="Full Name "
              className=" w-10/12 mb-3 p-3 rounded-md bg-gray-500 border-opacity-0"
              onChange={() => {
                setmessageErr("");
              }}
            />
          ) : null}

          <input
            ref={email}
            type="text"
            placeholder="Enter Email"
            className=" w-10/12 mb-3 p-3 rounded-md bg-gray-500 border-opacity-0"
            onChange={() => {
              setmessageErr("");
            }}
          />
          {/* <h1 className="text-xl px-5" >Password</h1> */}
          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="w-10/12 mb-5 p-3 rounded-md bg-gray-500 border-opacity-0"
          />
          <button
            className="text-xl w-10/12 bg-red-600 rounded-lg p-2 mb-3 "
            onClick={() => {
              handleLogin();
            }}
          >
            {isSignin ? "Sign in" : "Sign up"}
          </button>

          {isSignin ? (
            <div className="flex justify-between w-10/12  text-gray-500 mb-10">
              <div className="flex flex-row items-center gap-2 pl-1">
                <input type="checkbox" id="rememberMe" className="h-4 w-4" />

                <label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </label>
              </div>

              <h4
                className="underline cursor-pointer"
                onClick={() => {
                  setmessageErr("");
                }}
              >
                Need help ?
              </h4>
            </div>
          ) : null}

          <div className="flex justify-between w-10/12  text-gray-500 mb-5 mt-15">
            <div className="flex flex-row pl-1">
              <p>{isSignin ? "New to Netflix-GPT ? . " : " Already a user ? . "}</p>

              <h4
                className="text-white text-l cursor-pointer"
                onClick={() => {
                  toggleSignin();

                  setmessageErr("");
                }}
              >
                {" "}
                <span>{"  "}</span>
                {isSignin ? "Signup Now" : "Sign in"}
              </h4>
            </div>
          </div>

          <div className="flex justify-between w-10/12 text-gray-500 mb-5 mt-15">
            <div className="flex flex-row pl-1">
              <h6 className="text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                at bit.{"   "}
                <span className="underline text-blue-700 cursor-pointer">
                  Learn more
                </span>
              </h6>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
