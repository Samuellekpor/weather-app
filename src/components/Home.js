import React from 'react';
import Cities from './Cities';

function Home({ cities }) {
  return (
    <div>
      <h3 className="home-title">Stats by city</h3>
      <Cities cities={cities}/>
    </div>
  );
}

export default Home;
