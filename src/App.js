import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import NoMatch from "./pages/NoMatch"


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
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
