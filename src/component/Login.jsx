import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const load = false
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Login successfully!")
            if(load){
                
            }
            window.location.href=  "/display"
            toast.success("User logged in successfully!", {
                position: "top-center"
            })
        }catch(error){
            console.log(error.message)
            toast.error(error.message, {
                position: "bottom-center"
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Email">Enter email</label >
                <input type="Email" className="w-96 h-10 bg-slate-400" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Enter Password</label>
                <input type="password" className="w-96 h-10 bg-slate-400 mt-5" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="cursor-pointer">Login</button>
        </form>
    );
}
export default Login;