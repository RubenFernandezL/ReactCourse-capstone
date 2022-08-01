import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home.container";

const NavBar = () => {
  return (
    <div>
      <div>
        <h1>I am the navbar</h1>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar></NavBar>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
