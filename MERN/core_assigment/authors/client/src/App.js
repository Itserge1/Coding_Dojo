import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './views/Home';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path= "/">
        <Home />
        </Route>

        <Route exact path= "/new">
        <NewAuthor/>
        </Route>

        <Route exact path= "/edit/:_id">
        <EditAuthor/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
