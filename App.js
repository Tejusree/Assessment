import './App.css';
import {Routes, Link} from 'react-router-dom';
import Homepage from './Homepage'
import ClickButton from './ClickButton';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path = '/' exact element = {<Homepage/>} />
          <Route path = '/check-your-magic-number path' exact element = {<ClickButton/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
