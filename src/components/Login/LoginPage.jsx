import Form from "./Form";

export default function LoginPage() {
    return (
        <div className="bg-yellow w-full h-screen flex justify-center items-center"> 
            <div className="bg-white rounded-lg p-8 flex flex-col items-center">
                 <p className="font-bold text-4xl">CRUD OPERATIONS</p>
                 <p className="">SIGN IN</p>
                 <p className="text-darkGray text-sm p-4">Enter your credentials to access your account</p>
                <Form/> 
                <button className="bg-yellow rounded-md p-2 m-10">SIGN IN</button>
                <p>Forgot your password? Reset Password</p>
            </div>
        </div>

       
    )
}