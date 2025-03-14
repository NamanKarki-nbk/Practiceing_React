import { useContext } from "react";
import ThemeContext from "./theme_context";

const Theme_Switcher = () => {
  const { isDark, toogleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toogleTheme}
      className=" mt-4 bg-gray-800 text-white p-2 rounded"
    >
      Switch To {isDark ? " Light" : " Dark"} Theme
    </button>
  );
};

export default Theme_Switcher;
