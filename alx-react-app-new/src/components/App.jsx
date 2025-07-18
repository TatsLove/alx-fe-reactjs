import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // Importing the Counter component

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Counter /> {/* Counter is displayed between main content and footer */}
      <Footer />
    </div>
  );
}

export default App;
