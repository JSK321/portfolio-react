import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Router>
      <NavBar />
      <HomePage />
      <Footer />
    </Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <HomePage />
    //     </Route>
    //     <Route exact path="/aboutme">
    //       <AboutMe />
    //     </Route>
    //     <Route exact path="/contact">
    //       <Contact />
    //     </Route>
    //     <Route exact path="/portfolio">
    //       <Portfolio />
    //     </Route>
    //     <Route path="*">
    //       <NoMatch />
    //     </Route>
    //   </Switch>
    //   <Footer />
    // </Router>
  );
}

export default App;
