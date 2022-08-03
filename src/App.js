import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.container";
import NavBar from "./components/core/navbar/navbar.container";
import SignIn from "./routes/sign-in/sign-in.container";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar></NavBar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="sign-in" element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
