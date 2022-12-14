import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
         <Route  path ="/cart" exact component={Cart}/>
         <Route  path ="/error-page" component={ErrorPage}/>
         <Route  path ="/" exact component={Home}/>
         <Redirect to ="/error-page"/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
