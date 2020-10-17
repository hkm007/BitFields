import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import PostContent from './components/PostContent';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      <PostContent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
