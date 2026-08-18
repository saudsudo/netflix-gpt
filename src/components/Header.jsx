import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/reduxStore/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
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
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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