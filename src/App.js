import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/home">
            <HomePage/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
