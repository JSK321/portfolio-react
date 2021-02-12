import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Router>
      <Element name="top">
        <NavBar />
      </Element>
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
