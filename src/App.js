
import './App.css';
import Navvbar from './componed/navvbar';
import Foter from './componed/footer'
import Saif from './componed/card'

function App() {
  return (
    <div className="App">
     <Navvbar/>
     <div className="Container pic" >
     <Saif/>
     </div>
     <div> <Foter/> </div>
    </div>
  );
}


export default App;
