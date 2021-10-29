import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import news from "../assets/databases/news";

const Landing = lazy(() => import("../pages/Landing.jsx"));
const Coronarography = lazy(() =>
  import("../pages/diagnostics/Coronarography")
);
const News = lazy(() => import("../pages/news/"));
const Licenses = lazy(() => import("../pages/Licenses"));
const PageNotFound = lazy(() => import("../pages/404/PageNotFound"));
const OurTeam = lazy(() => import("../pages/OurTeam/OurTeam"));
//
const Stentirovanie = lazy(() => import("../pages/treatments/Stentirovanie"));
const Shuntirovanie = lazy(() => import("../pages/treatments/Shuntirovanie"));
const Karodit = lazy(() => import("../pages/treatments/Karotid"));
const RadioAblacia = lazy(() => import("../pages/treatments/RadioAblacia"));
const Implantacia = lazy(() => import("../pages/treatments/Implantacia"));
const Treatment = lazy(() => import("../pages/Treatment/Treatment"));
const OurContacts = lazy(() => import("../pages/OurContacts/OurContacts"));
const Diagnostics = lazy(() => import("../pages/Diagnostic/Diagnostics"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const miniinvisiv = lazy(() => import("../pages/treatments/Miniinvisiv"));
const Kotova = lazy(() => import("../pages/doctors/Kotova"));
const Sorokin = lazy(() => import("../pages/doctors/Sorokin"));

const Balahonov = lazy(() => import("../pages/doctors/Balahonov"));
const Shmatov = lazy(() => import("../pages/doctors/Shmatov"));
const Ateroskleros = lazy(() => import("../pages/diagnostics/Ateroskleros"));
const OpuholiSerdca = lazy(() => import("../pages/treatments/OpuholiSerdca"));
const Stolyarov = lazy(() => import("../pages/doctors/Stolyarov"));
const Kamenskih = lazy(
  () => import("../pages/doctors/Kamenskih"),
  console.log("404 loaded")
  );
const Kim = lazy(() => import("../pages/doctors/Kim"));
const Vasilev = lazy(() => import("../pages/doctors/Vasilev"));
const Kappushev = lazy(() => import("../pages/doctors/Kappushev"));
const Zubarev = lazy(() => import("../pages/doctors/Zubarev"));
const Sheremet = lazy(() => import("../pages/doctors/Sheremet"));
const Pyagai = lazy(() => import("../pages/doctors/Pyagai"));
const Asadullin = lazy(() => import("../pages/doctors/Asadullin"));
const Suhanova = lazy(() => import("../pages/doctors/Suhanova"));
const Starosockaya = lazy(() => import("../pages/doctors/Starosockaya"));
const Povarenkina = lazy(() => import("../pages/doctors/Povarenkina"));
const Tavi = lazy(() => import("../pages/treatments/Tavi"));
const ProtezirovanieAorti = lazy(() =>
  import("../pages/treatments/ProtezirovanieAorti")
);

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route
            path="/diagnostics/coronarographia"
            component={Coronarography}
          />
          <Route
            path="/treatment/stentirovanie-koronarnih-arteriy"
            component={Stentirovanie}
          />
          <Route
            path="/treatment/aorto-koronarnoe-shuntirovanie"
            component={Shuntirovanie}
          />
          <Route
            path="/treatment/miniinvisivnoe-protezirovanie-klapanov"
            component={miniinvisiv}
          />
          <Route
            path="/treatment/karotidnaya-endarterektomiya"
            component={Karodit}
          />
          <Route
            path="/treatment/radiochastotnaya-ablyaciya"
            component={RadioAblacia}
          />
          <Route
            path="/treatment/implantacia-kardiostimulyatorov"
            component={Implantacia}
          />
          <Route
            path="/treatment/transkatetornaya-implantaciya-aortalnogo-klapana"
            component={Tavi}
          />
          <Route path="/treatment/opuholi-serdca" component={OpuholiSerdca} />
          <Route
            path="/treatment/protezirovanie-aorti"
            component={ProtezirovanieAorti}
          />
          <Route exact path="/treatment" component={Treatment} />
          <Route path="/diagnostics/ateroskleros" component={Ateroskleros} />
          <Route path="/diagnostics" component={Diagnostics} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contacts" component={OurContacts} />
          {news.map((news, i) => {
            return (
              <Route
                key={Date.now() + i}
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
          <Route path="/team/doctor_vasilev/" component={Vasilev} />
          <Route path="/team/doctor_kappushev/" component={Kappushev} />
          <Route path="/team/doctor_zubarev/" component={Zubarev} />
          <Route path="/team/doctor_sheremet/" component={Sheremet} />
          <Route path="/team/doctor_pyagai/" component={Pyagai} />
          <Route path="/team/doctor_asadullin/" component={Asadullin} />
          <Route path="/team/doctor_starosockaya/" component={Starosockaya} />
          <Route path="/team/doctor_povarenkina/" component={Povarenkina} />
          <Route path="/team/doctor_suhanova/" component={Suhanova} />
          <Route path="/team" component={OurTeam} />
          <Route path="/licenses" component={Licenses} />
          <Route exact path="/" component={Landing} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
