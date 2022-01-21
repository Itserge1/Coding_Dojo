import './App.css';
import Home from './views/Home';
import Word from './views/Word';
import ColorAndWord from './views/ColorAndWord';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= "/" >
            <Home/>
          </Route>

          <Route exact path= "/:word" >
            <Word/>
          </Route>

          <Route exact path= "/:word/:color/:backgroundColor" >
            <ColorAndWord/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
