import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useState } from "react";

export default function LoginPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  function home() {
    if (!inputEmail || !inputPassword) {
      alert("Please, fill in all fields.");
    } else {
      if (inputEmail === "admin@email.com" && inputPassword === "admin") {
        navigate("/home");
      } else {
        alert("E-mail or password incorrect.")
      }
    }
  };

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      home();
    }
  }

  return (
    <div onKeyDown={handleKeyDown} className="bg-gradient-to-r from-darkYellow to-lightYellow w-full h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="border-l-8 border-lightYellow pl-2">
            <p className="font-bold text-4xl">CRUD OPERATIONS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-2xl">SIGN IN</p>
            <p className="text-darkGray text-md pb-10">
              Enter your credentials to access your account
            </p>
          </div>
        </div>
        <Form
          inputEmail={inputEmail}
          setInputEmail={setInputEmail}
          inputPassword={inputPassword}
          setInputPassword={setInputPassword}
        />
        <button
          className="bg-darkYellow rounded-sm p-2 m-10 text-white w-96"
          onClick={home}
        >
          SIGN IN
        </button>
        <p className="text-sm text-darkGray">
          Forgot your password?{" "}
          <span className="text-darkYellow underline">Reset Password</span>
        </p>
      </div>
    </div>
  );
}
