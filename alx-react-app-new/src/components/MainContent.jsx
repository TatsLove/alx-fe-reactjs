import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <UserProfile name="Tatenda" age={25} bio="Software Engineer and Explorer" />
      <UserProfile name="Blessing" age={30} bio="World traveler and foodie" />
    </main>
  );
}

export default MainContent;
