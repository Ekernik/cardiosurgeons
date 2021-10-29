import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <div id="curtain"></div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
