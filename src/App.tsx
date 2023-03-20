import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./app/login";
import Dashboard from "./app/dashboard";
import User from "./components/users";
import { ContentContainer } from "./style";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<SignIn />} path="/" />
        <Route element={<Dashboard />} path="/dashboard">
          <Route element={<User />} path="users" />
          <Route
            element={<ContentContainer>404 Nor Fount</ContentContainer>}
            path="*"
          />
        </Route>
        <Route element={<div>404 Nor Fount</div>} path="*" />
      </Routes>
    </Router>
  );
}

export default App;
