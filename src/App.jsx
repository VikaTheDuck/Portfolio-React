import React from "react";
import ErrorBoundary from "./ErrorBoundary"; // Import your ErrorBoundary component

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <ErrorBoundary>
          <Hero />
          </ErrorBoundary>
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;