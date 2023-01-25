import logo from './logo.svg';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Account/Login';
import SignUp from './Components/Account/SignUp';
import Home from './Components/Home/Home';

function App() {
  return (
<>
<Router>
<div className="App">
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/signup' element={<SignUp />} />
<Route exact path='/login' element={<Login />} />
</Routes>
  </div>
</Router>
</>
  );
}

export default App;
