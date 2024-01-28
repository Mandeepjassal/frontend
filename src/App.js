import logo from "./logo.svg";
import "./App.css";
import Home from "./components/admin/Home";
import Layout from "./components/admin/Layout";
import Login from "./components/admin/Login";
import Registration from "./components/admin/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
