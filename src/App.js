import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.container";
import NavBar from "./components/core/navbar/navbar.container";
import Authentication from "./routes/auth/auth.container";
import { Shop } from "./routes/shop/shop.container";
import CheckOutContainerComponent from "./routes/check-out/check-out.container";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar></NavBar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="auth" element={<Authentication></Authentication>}></Route>
        <Route path="shop/*" element={<Shop></Shop>}></Route>
        <Route
          path="check-out"
          element={<CheckOutContainerComponent></CheckOutContainerComponent>}
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
