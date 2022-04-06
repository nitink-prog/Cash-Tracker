import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            {/* if logged in, render <Home />, else send to login */}
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>

            {/* if logged in, send home, else render <Login /> */}
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>

            {/* if logged in, send home, else render <Signup /> */}
            <Route path="/signup">
              {user ? <Redirect to="/" /> : <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
