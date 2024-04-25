import React from 'react'
import Header from './Header';
import Footer from './footer';
import Section1 from './Section1';
import Theam from './Theam';
import Section2 from './Section2';

function Home() {
  return (
    <>
      {/* className="relative isolate px-6 pt-14 lg:px-8 h-full" */}

      <div >

        <Header />
        <Section1 />
      <Section2/>


      
        <Footer />
        <Theam/>
      </div>
    </>

  )
}

export default Home;