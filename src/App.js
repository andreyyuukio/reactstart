import './App.css';
import Header from './components/header';
import MainText from "./components/maintext"
import FunctionalCounter from './components/counter';
import Equation from './components/equation';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="wrapper">
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="content">
          <MainText />
          <FunctionalCounter />
          <Equation />
        
        </div>
      </div>     
    </div>
  );
}
export default App;

