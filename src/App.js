import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.container";
import NavBar from "./components/core/navbar/navbar.container";
import Authentication from "./routes/auth/auth.container";
import { Shop } from "./routes/shop/shop.container";
import CheckOutContainerComponent from "./routes/check-out/check-out.container";
import { useEffect } from "react";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));
    });
  });

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
