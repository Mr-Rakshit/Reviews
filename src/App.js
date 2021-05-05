import React from 'react';
import Review from './Review';
import data from './data'
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review name={data[0].name} job={data[0].job} image={data[0].image} text={data[0].text} />
      </section>
    </main>
  )
}

export default App;
