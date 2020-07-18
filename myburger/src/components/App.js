import React from 'react';
import './Burger/Burger.css';
import BurgerBuilder from './BurgerBuilder';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import Order from './Order';
import Orders from './Orders';

class App extends React.Component {
  render() {
    var AV = require('leancloud-storage');
    AV.init({
      appId:"KWEk9XnS44HE18YruvIjWMX5-gzGzoHsz",
      appKey:"XC4wqa5FcAPutIB7XoEIJBaS",
      serverURLs:"https://kwek9xns.lc-cn-n1-shared.com",
    });
    global.constants ={
      AV:AV,
    }
    return (
      <HashRouter history={BrowserRouter}>
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route exact path='/Order' component={Order} />
          <Route exact path='/Orders' component={Orders}/>
        </Switch>
      </HashRouter>
    )
  }
}
export default App;
