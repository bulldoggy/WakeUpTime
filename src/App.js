import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WakeUpTimePage from './pages/WakeUpTimePage';
import NappyTimePage from './pages/NappyTimePage';


function App() {
  return (
    <div className='App-header'>
      <Router>
        <Routes>
          <Route exact path="/" element={<WakeUpTimePage />} />
          <Route exact path="/nap" element={<NappyTimePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
