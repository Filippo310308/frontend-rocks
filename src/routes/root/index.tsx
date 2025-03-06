import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import {Link} from "react-router"


export const RootRoute = () => {
    const [count, setCount] = useState(0);
    const[title, setTitle]= useState ("GROUDON")
  
    return (
      <div className="h-dvh flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-center font-bold text-3xl text-red-500 mb-4">
          {title}
          </h1>
  
          <div className="flex justify-center space-x-4 mb-2">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} alt="React logo" />
            </a>
          </div>
  
          <h2 className="text-center font-bold text-xl mb-6">Vite + React</h2>
  
          <div className="flex flex-col items-center space-y-4">
            <button
              className="bg-orange-950 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-orange-600 transition-colors"
              onClick={() => setCount((count) => count + 1)}
            >
              Hai premuto il pulsante {count} {count === 1 ? "volta" : "volte"}
            </button>
  
            <button 
            className="bg-red-700 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-red-500 transition-colors"
            onClick={()=> setTitle("Geodude")}>
              cambia titolo
            </button>
            <p className="text-center">
              Modifica <code>src/App.tsx</code> e salva per testare l'hot reload
            </p>

          </div>
  
          <p className="text-center text-sm text-blue-400 px-4 py-4">Clicca sui loghi per saperne di più</p>
          
          <center><Link to="/dettaglio/0"  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-500 transition-colors">Link</Link></center>
          
         

        </div>
        
    

      </div>
    );
  }
  