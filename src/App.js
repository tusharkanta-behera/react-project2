import "./App.css";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import StudentCard from "./Components/StudentCard.js";

const App = () => {
  return (
    <>
      <Navbar/>
      <StudentCard name="Tushar" age={22}/>
      <StudentCard name="Soubhagya" age={23}/>
      <Footer/>
    </>
  )
}

export default App