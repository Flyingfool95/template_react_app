import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="page_container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
