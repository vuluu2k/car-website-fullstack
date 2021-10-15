
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Error from './views/components/page/Error';
import Loading from './views/loading/Loading';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home'render={props=><Loading {...props} PageRoute='home' />} />
          <Route exact path='/introduce'render={props=><Loading {...props} PageRoute='introduce' />} />
          <Route exact path='/products'render={props=><Loading {...props} PageRoute='products' />} />
          <Route exact path='/news'render={props=><Loading {...props} PageRoute='news' />} />
          <Route exact path='/installment'render={props=><Loading {...props} PageRoute='installment' />} />
          <Route exact path='/pricelist'render={props=><Loading {...props} PageRoute='pricelist' />} />
          <Route exact path='/contact'render={props=><Loading {...props} PageRoute='contact' />} />
          <Route exact path='/:something' component={Error} />
        </Switch>
      </Router>
  );
}

export default App;
