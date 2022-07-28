import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ShowEmployeesPage from "./pages/ShowEmployeesPage";
import EditEmployeesPage from "./pages/EditEmployeesPage";
function App() {
  return (
    /*Router enables Navigation between different Routes. We navigate to the different routes using the Link component. Component that we route to apears between <Routes> component.*/
    <Router>
      <div className="App">
        <nav>
          <span>
            <h1>NASCO</h1>
          </span>
          <span className="linkSpan">
            {/*Link to go to url /.*/}
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 20,
                fontWeight: 700,
              }}
              to="/"
            >
              Show Employees
            </Link>

            {/*Link to go to url /editEmployee.*/}
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 20,
                fontWeight: 700,
              }}
              to="/editEmployee"
            >
              Edit Employees
            </Link>
          </span>
        </nav>
        <Routes>
          {/*Go to ShowEmployeePage when url path is / .*/}
          <Route path="/" element={<ShowEmployeesPage />}></Route>
          {/*Go to EditEmployeePage when url path is /editEmployee .*/}
          <Route path="/editEmployee" element={<EditEmployeesPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
