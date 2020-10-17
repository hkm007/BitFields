import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostContent from './components/PostContent';
import Footer from './components/Footer';
import NewPost from './components/NewPost';

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
