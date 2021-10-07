import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeSwitcherComponent from "./components/ThemeSwitcher/ThemeSwitcher";

// Pages
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <>
      <center>
        <ThemeSwitcherComponent />
      </center>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
