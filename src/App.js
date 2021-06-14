
import './App.css';

import Login from './views/Login';
import About from './views/About';
import Menu from './views/Menu';
import Orderstatus from './views/Orderstatus';
import Profil from './views/Profil';

import Nav from './components/Nav';
import Cart from './components/Cart';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Menu" component={Menu}/>
          <Route path="/About" component={About}/>
          <Route path="/Profil" exact component={Profil}/>
          <Route path="/Orderstatus" component={Orderstatus}/>
          <Route path="/Cart" component={Cart}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
