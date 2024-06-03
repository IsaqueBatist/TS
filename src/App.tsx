import Button from "./components/Button/index";
import { Home } from "./pages/home/index";
import { Login } from "./pages/login/index"
import Feed from "./pages/feed/index"
import Register from "./pages/register/index";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import { AuthContextProvider } from "./context/auth";

const App = () => {
  return (
    <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthContextProvider>
      </Router>
  );
}

export default App;
