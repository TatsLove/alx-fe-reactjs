import React from 'react';

function MainContent() {
  return (
    // Apply inline styling to the main content section
    <main style={{
      padding: '30px',
      margin: '20px auto',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      maxWidth: '800px',
      lineHeight: '1.8'
    }}>
      <h2 style={{ color: '#333', fontSize: '1.8em', marginBottom: '20px' }}>Welcome to My City Showcase!</h2>
      <p style={{ marginBottom: '15px' }}>
        This application is designed to showcase some of my favorite cities around the world. Each city has its unique charm, history, and vibrant culture.
        From the bustling streets of New York to the historic alleys of Rome, there's always something new to discover.
      </p>
      <p>
        Stay tuned as I add more cities and details, including their famous landmarks, local cuisine, and interesting facts.
        I hope you enjoy exploring these digital postcards!
      </p>
    </main>
  );
}

export default MainContent;
