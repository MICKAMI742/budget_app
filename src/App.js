import logo from './logo.svg';
import './styles/App.css';
import SideMenu from './components/SideMenu';
import Dashboard from './components/Dashboard';
import NameBar from './components/NameBar';

function App() {
  return (
    <div className="App">
      <div className='left'><SideMenu /></div>
      <div className='middle'><Dashboard /></div>
      <div className='right'><NameBar /></div>
    </div >
  );
}

export default App;
