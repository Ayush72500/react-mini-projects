import useLocalStorage from "./useLocalStorage";

function App() {


  const [theme, setTheme] = useLocalStorage(
    "theme",
    {
      mode: "light"
    }
  );


  function toggleTheme() {

  
    if (theme.mode === "light") {


      setTheme({
        mode: "dark"
      });

    } else {

  
      setTheme({
        mode: "light"
      });
    }
  }




  return (

    <div
      className={`
        min-h-screen
        p-10
        transition-colors
        duration-300

        ${
          theme.mode === "light"
            ? "bg-white text-black"
            : "bg-gray-900 text-white"
        }
      `}
    >

      <div className="max-w-xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          Theme App
        </h1>


      
        <p className="text-xl mb-6">
          Current Theme: {theme.mode}
        </p>


        
        <button
          onClick={toggleTheme}
          className="
            px-5
            py-2
            rounded-lg
            bg-blue-600
            text-white
            hover:bg-blue-700
            transition
          "
        >

         
          {theme.mode === "light"
            ? "Dark Mode"
            : "Light Mode"}

        </button>

      </div>

    </div>
  );
}


export default App;