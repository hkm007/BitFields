import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewPost from './components/screens/NewPost';
import PostContent from './components/screens/PostContent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>  
        <Route path="/" exact component={PostContent} />
        <Route path="/new" component={NewPost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
