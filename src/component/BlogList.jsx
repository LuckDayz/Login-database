import { useEffect, useState } from "react";
// import Home from "../component/Home";
import Display from "../component/Display";

const BlogList = () => {
    const [blogs, setBlogs ] = useState([
        { tittle: "The black man", author: "John simp", id: 1 },
        { tittle: "The Refinery", author: "Aniku Dangote", id: 2 },
        { tittle: "The Power", author: "Reddigton", id: 3 },
    ])

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    const [name, setName] = useState("Luigi")
    // const handleClick = () =>{
    //     setName("Dayo")
    // }

    useEffect(()=>{
        
        // console.log(blogs)  
        console.log("Effect ran")
        console.log(name)
    }, [name])

    return (
        <div>
            <Display blogs={blogs} handleDelete={handleDelete}/>
            {/* <Display blogs={blogs.filter((blog) => blog.id === 2)} /> */}
            <button onClick={()=> setName("Dayoo")}>click</button>
            <p>{name}</p>
        </div>
    );
};

export default BlogList;