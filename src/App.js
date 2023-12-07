import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './component/home';
import './styles/index.css';
import Details from './component/details';
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<Details />} />
      </Routes>
    </Router>

  );
}

export default App;
