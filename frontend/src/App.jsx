import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Landing from "./pages/Landing.jsx";
import Coronarography from "./pages/treatment/Coronarography";
import News from "./pages/news/";
import Licenses from "./pages/Licenses";
import PageNotFound from "./pages/404/PageNotFound";
import OurTeam from "./pages/OurTeam/OurTeam";
import Stentirovanie from "./pages/treatment/Stentirovanie";
import Shuntirovanie from "./pages/treatment/Shuntirovanie";
import PlastikaMK from "./pages/treatment/PlastikaMK";
import Karodit from "./pages/treatment/Karotid";
import RadioAblacia from "./pages/treatment/RadioAblacia";
import Treatment from "./pages/Treatment/Treatment";
import OurContacts from "./pages/OurContacts/OurContacts";
import Diagnostics from "./pages/Diagnostics/Diagnostics";
import AboutUs from "./pages/AboutUs/AboutUs";
import miniinvisiv from "./pages/treatment/Miniinvisiv";

import news from "./assets/databases/news";
import Kotova from "./pages/doctors/Kotova";
import Sorokin from "./pages/doctors/Sorokin";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div id="curtain"></div>
      <Header />
      <Router>
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
          <Route path="/team/doctor_sorokin/" component={Sorokin} />
          <Route path="/team" component={OurTeam} />
          <Route path="/licenses" component={Licenses} />
          <Route exact path="/" component={Landing} />
          <Route path="" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
