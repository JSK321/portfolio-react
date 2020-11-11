import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
