import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Landing from "./pages/Landing.jsx";
import Coronarography from "./pages/treatments/Coronarography";
import News from "./pages/news/";
import Licenses from "./pages/Licenses";
import PageNotFound from "./pages/404/PageNotFound";
import OurTeam from "./pages/OurTeam/OurTeam";
import Stentirovanie from "./pages/treatments/Stentirovanie";
import Shuntirovanie from "./pages/treatments/Shuntirovanie";
import PlastikaMK from "./pages/treatments/PlastikaMK";
import Karodit from "./pages/treatments/Karotid";
import RadioAblacia from "./pages/treatments/RadioAblacia";
import Treatment from "./pages/Treatment/Treatment";
import OurContacts from "./pages/OurContacts/OurContacts";
import Diagnostics from "./pages/Diagnostic/Diagnostics";
import AboutUs from "./pages/AboutUs/AboutUs";
import miniinvisiv from "./pages/treatments/Miniinvisiv";

import news from "./assets/databases/news";
import Kotova from "./pages/doctors/Kotova";
import Sorokin from "./pages/doctors/Sorokin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Balahonov from "./pages/doctors/Balahonov";
import Shmatov from "./pages/doctors/Shmatov";
import Ateroskleros from "./pages/diagnostics/Ateroskleros";
import Stolyarov from "./pages/doctors/Stolyarov";
import Kamenskih from "./pages/doctors/Kamenskih";
import Kim from "./pages/doctors/Kim";

function App() {
  return (
    <div className="App">
      <div id="curtain"></div>
      <Header />
      <Router>
        <Switch>
          <Route path="/diagnostics/coronarographia" component={Coronarography} />
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
          <Route path="/diagnostics/ateroskleros" component={Ateroskleros} />
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
          <Route path="/team/doctor_balahonov/" component={Balahonov} />
          <Route path="/team/doctor_shmatov/" component={Shmatov} />
          <Route path="/team/doctor_stolyarov/" component={Stolyarov} />
          <Route path="/team/doctor_kamenskih/" component={Kamenskih} />
          <Route path="/team/doctor_kim/" component={Kim} />
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
