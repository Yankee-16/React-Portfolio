import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Post from "./Components/Post";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/blog">
            <Home />
          </Route>
          <Route path="/blog/:str">
            <Post />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
