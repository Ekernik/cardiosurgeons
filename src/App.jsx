import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Landing from "./pages/Landing.jsx";
import Coronarography from "./pages/hot/Coronarography";
import News from "./pages/news/n1";
import Licenses from "./pages/Licenses";
import PageNotFound from "./pages/404/PageNotFound";
import OurTeam from "./pages/OurTeam/OurTeam";
import Stentirovanie from "./pages/hot/Stentirovanie";
import Shuntirovanie from "./pages/hot/Shuntirovanie";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="curtain"></div>
      </div>

      <Switch>
        <Route path="/hot/coronarography" component={Coronarography} />
        <Route path="/hot/operation_02" component={Stentirovanie} />
        <Route path="/hot/operation_03" component={Shuntirovanie} />
        <Route path="/news/" component={News} />
        <Route path='/team' component={OurTeam} />
        <Route path="/licenses" component={Licenses} />
        <Route exact path="/" component={Landing} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
