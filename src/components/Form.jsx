export default function Form() {
    return (
        <div className="flex flex-col gap-6 w-96 mx-auto">
            <div className="flex flex-col gap-2">
                <p className="text-darkGray text-md font-medium">Email</p>
                <input 
                    type="text" 
                    placeholder="Enter your email" 
                    className="border border-lightGray rounded-md h-12 text-sm p-3"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-darkGray text-md font-medium">Password</p>
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="border border-lightGray rounded-md h-12 text-sm p-3"
                />
            </div>
        </div> 
    );
}
