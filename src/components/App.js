import React from 'react';

// Define the Navbar component
function Navbar() {
  return (
    <nav>
      {/* Navbar content here */}
    </nav>
  );
}

// Define the Home component
function Home() {
  return (
    <div>
      {/* Home content here */}
    </div>
  );
}

// Define the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Define the App component
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;