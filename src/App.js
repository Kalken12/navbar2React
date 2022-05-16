import logo from './logo.svg';
import './App.css';
import Navbar1 from './Components/Logo'
import Navbar2 from './Components/Links';
import Navbar3 from './Components/Btn';
function App() {
  let data = [{name:Navbar2}]
  return (
    <div className='Navbar'>

      <Navbar1></Navbar1>
      <Navbar2></Navbar2>
      <Navbar3></Navbar3>

    </div>

  );
}

export default App;
