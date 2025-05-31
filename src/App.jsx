// import BlogList from "./component/BlogList";
// import Home from "./component/Home";
import Display from "./component/Display";
import Login from "./component/Login";
import Register from "./component/Register";
import BlogList from "./component/BlogList";

import { BrowserRouter as Router, Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Router>
        <div>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/display" element={<Display/>}></Route>
          {/* <Route path="/bloglist" element={<BlogList/>}></Route> */}
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
      </Router>

    </>
  )
}

export default App
