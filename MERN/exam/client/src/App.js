import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home';
import NewPet from './views/NewPet';
import EditPet from './views/EditPet';
import OnePet from './views/OnePet';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/new">
          <NewPet/>
        </Route>

        <Route exact path="/edit/:_id">
          <EditPet/>
        </Route>

        <Route exact path="/find/:_id">
          <OnePet/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
