import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing all the themes
import Home from "../pages/home.jsx";
import Test from "../pages/test.jsx";
import PopularCategories from "../pages/PopularCategories.jsx";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home  />} />
            <Route exact path="/test" element={<Test  />} />
            <Route path="/:category" element={<PopularCategories />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default MyRouts;