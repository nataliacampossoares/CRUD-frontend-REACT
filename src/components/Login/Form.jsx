export default function Form() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <p className="text-darkGray">Email</p>
                <input type="text" placeholder="Enter your email" className="border border-lightGray rounded-md placeholder:text-sm"/>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-darkGray">Password</p>
                <input type="password" placeholder="Enter your password" className="border border-lightGray"/>
            </div>
        </div> 
    )
}