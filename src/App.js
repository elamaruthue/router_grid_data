import React from 'react';
import { BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom';
import User from './component/user';
import Home from './component/home';
import About from './component/about';
function App(){
  return(
    <div>
    <Router>
      <Switch>
      <Route exact path="/" component={User} />
      <Route exact path="/home" component={Home}/>
      <Route exact path="/about" component={About}/>
      </Switch>
    </Router>
  </div>
  )
}
export default App; 
// ReactDom.render(route,document.getElementById('root'));