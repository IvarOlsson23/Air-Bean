
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/CoffeShop/actions';
import Login from './views/Login';
import About from './views/About';
import Menu from './views/Menu';
import Orderstatus from './views/Orderstatus';
import Profil from './views/Profil';

import Nav from './components/Nav';
import Cart from './components/Cart';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  const dispatch = useDispatch();
  
	async function getMenu() {
    const response = await fetch(
      'http://localhost:5000/api/coffee'
      );
      const data = await response.json();
      dispatch(fetchData(await data));
    }
    
    useEffect(() => {
      getMenu();
    }, []);


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
