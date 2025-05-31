import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc,setDoc} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname]=useState("")

    const handleRegister= async(e)=>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            console.log(user)
            
            if(user !== undefined){
                await setDoc(doc(db, "Users", user.uid),{
                    user:{
                        email: user.email || "",
                        fname,
                        lname
                    }
                })
                // console.log("User login successfully")
                window.location.href= "/login"
                toast.success("User registered successfully!", {
                    position:"top-center"
                })
            }
        }catch(error){
            console.log(error.message)
            toast.error(error.message, {
                position:"bottom-center"
            })
        }
    }

    return ( 
        <form onSubmit={handleRegister}>
            <div>
                <label htmlFor="fName">First name</label>
                <input type="text" className="w-96 h-10 bg-slate-400 mt-5" value={fname} onChange={(e) => setFname(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="lname">Last name</label>
                <input type="text" className="w-96 h-10 bg-slate-400 mt-5" value={lname} onChange={(e) => setLname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Your email</label>
                <input type="email" className="w-96 h-10 bg-slate-400 mt-5" value={email} onChange={(e) =>setEmail(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="password">Your Password</label>
                <input type="password" className="w-96 h-10 bg-slate-400 mt-5" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="w-15 h-15 bg-slate-500 mt-4">Login</button>
            <ToastContainer />
        </form>
        
     );
}
 
export default Register;