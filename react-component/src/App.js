import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto'
import Adress from './Component/Profile/Adress'
import FullName from './Component/Profile/FullName'


function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <br></br>
      <Adress />
      <br></br>
      <FullName />
    </div>
  );
}

export default App;
