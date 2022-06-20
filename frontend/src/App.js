import './App.css';
import Masuk from './components/input';
import NavbarComp from './components/navbar/NavbarComp';

function App() {
  return (
    <div>
      <div className='App'>
        <NavbarComp />
        <div className='kiri'/>
            <Masuk />
        </div>
    </div>
  );
}

export default App;
