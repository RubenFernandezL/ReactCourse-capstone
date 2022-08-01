import { Routes, Route } from "react-router-dom";
import NavBar from "./components/core/navbar/navbar.container";
import Home from "./routes/home/home.container";

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
