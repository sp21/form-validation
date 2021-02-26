import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <div className="App">
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/card"/>)}/>
            <Route path="/card" component={Card}/>
            <Route path="/edit/:empId" component={EditEmployee}/>
          </Switch>
    </div>
  );
}

export default App;
