import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);

  const toggleSignin = () => {
    setisSignin(!isSignin);
  };
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute w-3/12 h-4/6 bg-black bg-opacity-80 border-b-3 rounded-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-4xl ml-8 mt-10 mb-8 ">
          {isSignin ? "Sign in" : "Sign up"}{" "}
        </h1>
        <div className=" flex flex-col justify-center items-center">
          {/* <h1 className="text-xl px-5"> Email </h1> */}

          {!isSignin ? (
            <input
              type="text"
              placeholder="Full Name "
              className=" w-10/12 mb-3 p-3 rounded-md bg-gray-500 border-opacity-0"
            />
          ) : null}

          <input
            type="text"
            placeholder="Enter Email"
            className=" w-10/12 mb-3 p-3 rounded-md bg-gray-500 border-opacity-0"
          />
          {/* <h1 className="text-xl px-5" >Password</h1> */}
          <input
            type="password"
            placeholder="Enter Password"
            className="w-10/12 mb-5 p-3 rounded-md bg-gray-500 border-opacity-0"
          />
          <button className="text-xl w-10/12 bg-red-600 rounded-lg p-2 mb-3 ">
            {isSignin ? "Sign in" : "Sign up"}
          </button>

          {isSignin ? (
            <div className="flex justify-between w-10/12  text-gray-500 mb-10">
              <div className="flex flex-row pl-1">
                <p>Img </p>

                <h4 className="underline"> Remember me</h4>
              </div>

              <h4 className="underline cursor-pointer">Need help ?</h4>
            </div>
          ) : null}

          <div className="flex justify-between w-10/12  text-gray-500 mb-5 mt-15">
            <div className="flex flex-row pl-1">
              <p>{isSignin ? "New to Netflix ? " : " Already a user ? "}</p>

              <h4
                className="text-white text-l cursor-pointer"
                onClick={() => {
                  toggleSignin();
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
