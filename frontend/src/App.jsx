import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="flex justify-center text-white">
        <Navbar />
      </header>
      <main className="w-full max-h-screen h-screen flex justify-center text-white">
        <Outlet />
        <Toaster />
      </main>
    </>
  );
}

export default App;
