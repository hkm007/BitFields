import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import PostContent from './components/PostContent';
import Footer from './components/Footer';
import NewPost from './components/NewPost';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Jumbotron />
      <PostContent /> */}
      <NewPost />
      <Footer />
    </React.Fragment>
  );
}

export default App;
