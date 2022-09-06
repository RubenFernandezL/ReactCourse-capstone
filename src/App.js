import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.container";
import NavBar from "./components/core/navbar/navbar.container";
import Authentication from "./routes/auth/auth.container";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar></NavBar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="auth" element={<Authentication></Authentication>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
