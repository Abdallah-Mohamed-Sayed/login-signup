import "./LoginSignup.css";
import userIcon from "../assets/person.png";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const handleCkick = (type) => {
    if (action === type) {
      alert("Submit");
    } else {
      setAction(type);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-500 ">
      <div className="card bg-white shadow-md flex flex-col items-center rounded-lg p-6 ">
        <div className="header mb-2">
          <div className="text text-xl font-bold text-center">{action}</div>
        </div>
        <div className="h-2 bg-blue-800 w-10 rounded-md "></div>
        <div className="inputs space-y-4">
          {action !== "Sign Up" ? (
            ""
          ) : (
            <Input src={userIcon} type="text" alt="User Icon">
              Username
            </Input>
          )}
          <Input src={emailIcon} type="email" alt="Email Icon">
            Email
          </Input>
          <Input src={passwordIcon} type="password" alt="Password Icon">
            Password
          </Input>
          {action !== "Login" ? (
            ""
          ) : (
            <p className="opacity-75">
              Lost Password?{" "}
              <a href="#forget" className="text-blue-700">
                CLick Here
              </a>
            </p>
          )}
          <div className="flex justify-between">
            <Button
              onClick={() => {
                handleCkick("Sign Up");
              }}
              light={action !== "Sign Up"}
            >
              Sign Up
            </Button>
            <Button
              onClick={() => {
                handleCkick("Login");
              }}
              light={action !== "Login"}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
