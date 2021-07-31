import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Landing from './pages/Landing.jsx';
import Coronarography from './pages/hot/Coronarography';
import News from './pages/news/n1';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="curtain"></div>
      </div>

      <Switch>
        <Route path="/hot/coronarography">
          <Coronarography />
        </Route>
        <Route path='/news/'>
          <News />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
