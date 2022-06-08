import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
