import React, { useState, useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import NewPost from './components/screens/NewPost';
import Post from './components/screens/Post';
import Login from './components/screens/Login';
import firebase from './firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer, initialState } from './reducers/userReducer'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

toast.configure();
export const UserContext = createContext()

const Routing = () => {
  const history = useHistory();
  const {dispatch} = useContext(UserContext)

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      if(user) {
        dispatch({type:"USER", payload:user})
      } else {
        history.push("/");
      }
  }, [dispatch])

  return (
    <Switch>  
      <Route path="/new" component={NewPost} />
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [firebaseInit, setFirebaseInit] = useState(false);

  useEffect(() => {
    firebase.isInit().then(val => {
      setFirebaseInit(val);
    })
  }, [])

  return firebaseInit !== false ? (
    <UserContext.Provider value={{state, dispatch}} >
      <Router>
        <Navbar />
        <Routing />
        <Route exact path="/" component={Post} />
        <Route path="/login" component={Login} />
      </Router>
    </UserContext.Provider>
  ) : null;
}

export default App;
