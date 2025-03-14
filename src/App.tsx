import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tailwind_Practice from "./components/tailwind_practice";
import Resposive_Practice from "./components/resposive_practice";
import Hooks from "./components/hooks";
import Theme_Switcher from "./context/Theme_Switcher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tailwind_Practice />} />
        <Route path="/res" element={<Resposive_Practice />} />
        <Route path="hooks" element={<Hooks />} />
      </Routes>
      <Theme_Switcher />
    </BrowserRouter>
  );
}

export default App;
