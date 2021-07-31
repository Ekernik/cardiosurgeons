import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Landing from "./pages/Landing.jsx";
import Coronarography from "./pages/hot/Coronarography";
import News from "./pages/news/n1";
import Licenses from "./pages/Licenses";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="curtain"></div>
      </div>

      <Switch>
        <Route path="/hot/coronarography" component={Coronarography} />
        <Route path="/news/" component={News} />
        <Route path="/licenses" component={Licenses} />
        <Route exact path="/" component={Landing} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
