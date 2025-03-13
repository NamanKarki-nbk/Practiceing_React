import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tailwind_Practice from "./components/tailwind_practice";
import Resposive_Practice from "./components/resposive_practice";
import Hooks from "./components/hooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tailwind_Practice />} />
        <Route path="/res" element={<Resposive_Practice />} />
        <Route path="hooks" element={<Hooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
