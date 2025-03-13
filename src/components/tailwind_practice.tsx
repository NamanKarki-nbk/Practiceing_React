import { useNavigate } from "react-router-dom";

const Tailwind_Practice = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-row-2 grid-cols-2 gap-2 bg-gray-200 p-4">
      <div className=" bg-red-400">Red</div>
      <div className="  bg-blue-400">Blue</div>
      <div className=" bg-green-400">Green</div>
      <div className=" bg-yellow-400">Yellow</div>

      <table className="border-separate border border-gray-500">
        <tr>
          <td className="border border-gray-500 p-4">Cell1</td>
          <td className="border border-gray-500 p-4">Cell2</td>
        </tr>
        <tr>
          <td className="border border-gray-500 p-4">Cell3</td>
          <td className="border border-gray-500 p-4">Cell4</td>
        </tr>
      </table>

      <table className="border-collapse border border-gray-500">
        <tr>
          <td className="border border-gray-500 p-4">Cell1</td>
          <td className="border border-gray-500 p-4">Cell2</td>
        </tr>
        <tr>
          <td className="border border-gray-500 p-4">Cell3</td>
          <td className="border border-gray-500 p-4">Cell4</td>
        </tr>
      </table>

      <button
        className="bg-blue-500 w-30 text-white text-center m-auto px-2 py-2 transition duration-300  hover:bg-blue-700"
        onClick={() => navigate("/hooks")}
      >
        Hover Me
      </button>

      <div className="bg-blue-500 text-white py-2 px-4  m-auto transition-colors duration-300 delay-600 cursor-pointer hover:bg-green-700">
        Hover Me
      </div>

      <div className="bg-blue-500 text-white py-2 px-4  m-auto transition-opacity duration-300  hover:opacity-10">
        Hover Me To Fade
      </div>

      <div className="bg-blue-500 text-white py-2 px-4  m-auto transition-transform duration-300 delay-300 ease-in hover:translate-25">
        Hover Me To Transform
      </div>

      <div
        onClick={() => navigate("/res")}
        className="bg-blue-500 hover:animate-bounce text-center py-5 rounded-full w-20 h-20"
      >
        Bounce
      </div>
      <input
        type="text"
        className=" max-w-60  border-2 border-gray-300 place-self-center focus:ring-3 focus:ring-green-300 p-2"
      />
    </div>
  );
};

export default Tailwind_Practice;
