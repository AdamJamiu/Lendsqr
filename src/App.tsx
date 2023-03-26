import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./app/login";
import Dashboard from "./app/dashboard";
import User from "./components/users";
import { ContentContainer } from "./style";
import AppProvider from "./context/appProvider";
import UserDetails from "./components/userDetails";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route index element={<SignIn />} path="/" />
          <Route element={<Dashboard />} path="/dashboard">
            <Route element={<User />} path="users" />
            <Route element={<UserDetails />} path="users/:id" />
            <Route
              element={<ContentContainer>404 Not Fount</ContentContainer>}
              path="*"
            />
          </Route>
          <Route element={<div>404 Nor Fount</div>} path="*" />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
