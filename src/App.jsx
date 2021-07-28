import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Landing from './pages/Landing.jsx';
import Coronarography from './pages/hot/Coronarography';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="curtain"></div>
      </div>

      <Switch>
        <Route path="/coronarography">
          <Coronarography />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
