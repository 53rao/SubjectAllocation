
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/Adminlogin"
function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<AdminLogin/>} />
      </Routes>
    </Router>)
}

export default App;
