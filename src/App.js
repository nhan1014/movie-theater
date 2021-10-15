import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About"

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/About" component={About} />
            <Route exact path="/Home" component={Home} />
          </Switch>
        </div>
      </Switch>
    </Router>
  );
}

export default App;