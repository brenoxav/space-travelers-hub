import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/">
          <Rockets />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
