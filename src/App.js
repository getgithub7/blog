import "./App.css";
import Home from "./components/Home/pages/Home";
import Blog from "./components/Home/pages/Blog";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const App = () => (
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
