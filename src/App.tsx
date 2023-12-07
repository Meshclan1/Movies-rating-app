import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
