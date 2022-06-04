import { Outlet } from "react-router";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container" >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
