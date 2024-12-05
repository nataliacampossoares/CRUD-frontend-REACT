import { useState } from "react";

export default function Form() {

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const handleInputChange = (event) => {
        setInputEmail(event.target.value);
        console.log(inputEmail)
      };

    const handlePasswordChange = (event) => {
        setInputPassword(event.target.value);
        console.log(inputPassword)
    }

    return (
        <div className="flex flex-col gap-6 w-96 mx-auto">
            <div className="flex flex-col gap-2">
                <p className="text-darkGray text-md font-medium">Email</p>
                <input 
                    type="text" 
                    placeholder="Enter your email" 
                    onChange={handleInputChange}
                    value={inputEmail}
                    className="border border-lightGray rounded-md h-12 text-sm p-3"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-darkGray text-md font-medium">Password</p>
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    onChange={handlePasswordChange}
                    value={inputPassword}
                    className="border border-lightGray rounded-md h-12 text-sm p-3"
                />
            </div>
        </div> 
    );
}
