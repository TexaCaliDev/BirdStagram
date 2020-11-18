import './styles/App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Router from './components/Router'


function App() {
  return (
  <div className="App">
    <Router />
  </div>
  );
}

export default App;
