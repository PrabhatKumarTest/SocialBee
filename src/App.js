import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import React, { useState, useEffect } from "react";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import SignIn from "./pages/signin/SingIn";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.unsplash.com/photos/?client_id=lF2uW3wfDt5MxaYkJPwLQVwM08hTyFYhjf5JjF0-Qpg&per_page=30";
      let data = await fetch(url);
      let parsedData = await data.json();
      setData(parsedData);
    };
    fetchData();
  }, []);
  return (
    data && (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element= {<Home data={data} />} />
            <Route exact path="/profile" element= {<Profile data={data} />} />
            <Route exact path="/login" element= {<Login data={data} />} />
            <Route exact path="/signup" element= {<SignIn data={data} />} />
          </Routes>
        </Router>
      </>
    )
  );
}
export default App;
