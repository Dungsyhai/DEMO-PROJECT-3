import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Details from "./components/Details";
import { Cashout } from "./components/Cashout";
import {Login} from "./admin/Login";
import Admin from "./admin/Admin";
import NotFound from "./components/NotFound";
import Logout from "./admin/Logout";
import { AddProducts } from "./admin/AddProducts";
import {Register} from "./admin/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
     <Provider store={store}>
       <Nav/>
       <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details/:id" exact component={Details} />
          <Route path="/login" exact component={Login}/>
          <Route path="/admin" exact component={Admin}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/addproducts" exact component={AddProducts}/>
          <Route path="/cashout" exact component={Cashout}/>
          <Route path="/logout" exact component={Logout}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
     </Provider>
    </Router>
  );
}

export default App;
