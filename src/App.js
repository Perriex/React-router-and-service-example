import "./App.css";
import Header from "./layout/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { Route, Switch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/detail/:textId">
          <DetailPage />
        </Route>
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
