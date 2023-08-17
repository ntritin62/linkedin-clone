import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserAuth } from './actions/userActions';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);
  const user = useSelector((state) => state.user.user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {user ? (
            <Route path="/home">
              <Header />
              <Home />
            </Route>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
