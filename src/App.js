import {HashRouter as Router,Route,NavLink,Switch} from 'react-router-dom';
import Login from './pages/Login'
import Layout from './pages/Layout'

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav-container'>
          <NavLink to="/login" className="nav-item">登录</NavLink> 
          <NavLink to="/layout" className="nav-item">首页</NavLink> 
        </div>
        <div className='container'>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/layout" component={Layout} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
