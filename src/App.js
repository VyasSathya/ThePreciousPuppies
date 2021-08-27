import React from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/layout/navbar";
import SideBar from "./components/layout/sider";

const App = () => {
  return (
    <div className="overflow-x-hidden relative">
      <Router>
        <Navbar />
        <SideBar />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
