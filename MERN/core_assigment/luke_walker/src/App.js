import './App.css';
import People from './views/People';
import Planets from './views/Planets';
import Home from './views/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <div className="App-header">
        <div className="wrapper">
          <BrowserRouter>
          <Switch>
            <Route exact path ="/">
            <Home />
            </Route>

            <Route exact path ="/people/:id">
            <Home />
            <People />
            </Route>

            <Route exact path= "/planets/:id">
            <Home />
            <Planets />
            </Route>
          </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
