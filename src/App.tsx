import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./app/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SignIn />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
