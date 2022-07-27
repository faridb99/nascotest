import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ShowEmployeesPage from "./pages/ShowEmployeesPage";
import EditEmployeesPage from "./pages/EditEmployeesPage";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <span>
            <h1>NASCO</h1>
          </span>
          <span className="linkSpan">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Show Employees
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/editEmployee"
            >
              Edit Employees
            </Link>
          </span>
        </nav>
        <Routes>
          <Route path="/" element={<ShowEmployeesPage />}></Route>
          <Route path="/editEmployee" element={<EditEmployeesPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
