import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/my-profile" exact>
          <MyProfile />
        </Route>
        <Route path="/missions" exact>
          <Missions />
        </Route>
        <Route path="/" exact>
          <Rockets />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
