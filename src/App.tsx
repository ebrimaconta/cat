import logo from './logo.svg';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './domain/Main';
import Upload from './domain/Upload/Upload';
import './assets/css/style.css';
import './assets/css/tailwind.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
require('dotenv').config();
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/upload' component={Upload} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
