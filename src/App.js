import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"


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

      </Switch>
    </Router>
  );
}

export default App;
