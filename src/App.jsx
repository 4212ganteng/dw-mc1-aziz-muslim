import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "./components/first";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Show from "./components/Show";

function App() {
  return (
    <div>
      <h2>abc cinta</h2>
      <Router>
        <Routes>
          <Route exact path="/" element={<Show />} />
        </Routes>
      </Router>
      <First />
    </div>
  );
}

export default App;
