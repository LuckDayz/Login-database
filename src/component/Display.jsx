import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Display = () => {
    const [userDetails, setUserDetails] = useState(null);
       const fetchUserDetails = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log("User isn't logged in");
            }
        })



    }
    useEffect(() => {
        fetchUserDetails();
    },[]);

    return (
        <div >
            {/* {blogs.map((blog) => (
                <div key={blog.id}>
                    <p>{blog.tittle}</p>
                    <p>{blog.author}</p>
                    <button onClick={()=> handleDelete(blog.id)}>delete</button>
                </div>
            ))} */}

            {userDetails ? (
                <div>
                    <>
                        <h1>Welcome {userDetails.user.fname}</h1>
                        <p>Email:  {userDetails.user.email}</p>
                        <p>firstName:  {userDetails.user.fname}</p>
                        <p>lastname:  {userDetails.user.lname}</p>
                    </>
                </div>
            ) : (
                <div>loading....</div>
            )}
        </div>
    );
}

export default Display;