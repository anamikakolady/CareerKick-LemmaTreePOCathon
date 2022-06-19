import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";
import Jobs from "./Pages/Jobs";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="jobs" element={<Jobs />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
    </>
  );
}

export default App;
