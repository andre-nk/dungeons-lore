import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateSpell from '../components/create_spell';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <CreateSpell/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
