
import Login from"./Components/Login"
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
