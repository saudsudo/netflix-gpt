import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/reduxStore/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { logo } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {       
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
         navigate("/Browse");
      } else {
         dispatch(removeUser());
         navigate("/");
      }
    });
    return () => unsubscribe;
  },[]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
       
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black">
      {/* Logo */}
      <img
        className="w-32 md:w-44"
        src={logo}
        alt="Netflix logo"
      />

      {/* Sign Out */}
      {user && (
        <div className="flex justify-between ">
          <h1 className="m-1 p-1 font-semibold">
            {" "}
            Welcome{" "}
            <span className="text-red-700 p-2 cursor-pointer">
              {user.displayName}
            </span>
          </h1>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => {
              handleSignOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;


// Changed View