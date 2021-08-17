import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Landing from "./pages/Landing.jsx";
import Coronarography from "./pages/Treatment/Coronarography";
import News from "./pages/news/";
import Licenses from "./pages/Licenses";
import PageNotFound from "./pages/404/PageNotFound";
import OurTeam from "./pages/OurTeam/OurTeam";
import Stentirovanie from "./pages/Treatment/Stentirovanie";
import Shuntirovanie from "./pages/Treatment/Shuntirovanie";
import PlastikaMK from "./pages/Treatment/PlastikaMK";
import Karodit from "./pages/Treatment/Karotid";
import RadioAblacia from "./pages/Treatment/RadioAblacia";
import Treatment from "./pages/Treatment/Treatment";
import OurContacts from "./pages/OurContacts/OurContacts";
import Diagnostics from "./pages/Diagnostics/Diagnostics";
import AboutUs from "./pages/AboutUs/AboutUs";
import miniinvisiv from "./pages/Treatment/Miniinvisiv";

import news from "./assets/databases/news";
import Kotova from "./pages/doctors/Kotova";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="curtain"></div>
      </div>
      <Switch>
        <Route path="/treatment/coronarographia" component={Coronarography} />
        <Route
          path="/treatment/stentirovanie-koronarnih-arteriy"
          component={Stentirovanie}
        />
        <Route
          path="/treatment/aorto-koronarnoe-shuntirovanie"
          component={Shuntirovanie}
        />
        <Route
          path="/treatment/plastika-mitralnogo-klapana"
          component={PlastikaMK}
        />
        <Route
          path="/treatment/miniinvisivnoe-protezirovanie-klapanov"
          component={miniinvisiv}
        />
        <Route path="/treatment/protezirovanie-aorti" component={Treatment} />{" "}
        {/* TODO */}
        <Route
          path="/treatment/karotidnaya-endarterektomiya"
          component={Karodit}
        />
        <Route
          path="/treatment/radiochastotnaya-ablyaciya"
          component={RadioAblacia}
        />
        <Route exact path="/treatment" component={Treatment} />
        <Route path="/diagnostics" component={Diagnostics} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contacts" component={OurContacts} />
        {news.map((news) => {
          return (
            <Route
              path={`/news/${news.link}`}
              render={(props) => <News newsId={news.id} {...props} />}
            />
          );
        })}
        <Route path="/team/doctor_kotova/" component={Kotova} />
        <Route path="/team" component={OurTeam} />
        <Route path="/licenses" component={Licenses} />
        <Route exact path="/" component={Landing} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
