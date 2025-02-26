import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import NewProj from "./pages/NewProject";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/newproject" element={<NewProj />} />
        <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
