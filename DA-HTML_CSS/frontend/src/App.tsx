import { Routes, Route } from "react-router-dom";
import HomePage1 from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage1 />}></Route>
      </Routes>
    </>
  );
}
export default App;
