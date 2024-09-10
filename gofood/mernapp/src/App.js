import './App.css';
import Home from './components/screens/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './components/screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './components/screens/MyOrder.js';
import Profile from './components/screens/Profile.js';


function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/creatuser' element={<Signup/>}></Route>
        <Route exact path='/myOrder' element={<MyOrder/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
