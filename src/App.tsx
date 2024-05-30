import Button from "./components/Button/index";
import { Home } from "./pages/home/index";
import { Login } from "./pages/login/index"
import Feed  from "./pages/feed/index"
import Register from "./pages/register/index";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/feed" element={ <Feed />} />
      <Route path="/register" element={ <Register />} />
    </Routes>
  </Router>
  );
}

export default App;
