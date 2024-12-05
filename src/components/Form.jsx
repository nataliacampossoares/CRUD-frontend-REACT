export default function Form({ inputEmail, setInputEmail, inputPassword, setInputPassword }) {

    const handleInputChange = (event) => {
        setInputEmail(event.target.value);
      };

    const handlePasswordChange = (event) => {
        setInputPassword(event.target.value);
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
