import './App.css';
import wands from './wand';
import ListofWands from './Components/ListofWands';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Fullwanddeets from './Components/Fullwanddeets';
import Fourohfour from './Components/Fourohfour';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Olliver's Wands</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Not a Magic User?</a>
      </li>
    </ul>
  </div>
</nav>

<Routes> 

<Route path="/" element = {<ListofWands keyforwands = {wands}/> }/>
<Route path="/Fullwanddeets/:wandslug" element = {<Fullwanddeets completewandinfo = {wands}/>}/>
<Route path="*" element = {<Fourohfour/>}/>
{/* wands here is an array from the data list. It is deconstructed and sent to ListofWands. The function, ListofWands is intaking the array. */}

</Routes>



    </div>
  );
}

export default App;
