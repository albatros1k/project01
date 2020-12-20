import React from 'react';
import './App.css';


const App = () => {
  return (
<div className = 'app-wrapper'>
  <header className ='header'>
    <img src='https://iconape.com/wp-content/png_logo_vector/albatros-de-brest-logo.png'/>
  </header>
  <nav className = 'nav'>
    <ul>
      <li><a href="" className="">Profile</a></li>
      <li><a href="" className="">Messages</a></li>
      <li><a href="" className="">News</a></li>
      <li><a href="" className="">Music</a></li>
      <li><a href="" className="">Settings</a></li>
    </ul>
  </nav>
  <div className = 'content'>
    <div>
      <img src="https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000"/>
    </div>
    <div>
      ava + description
    </div>
    <div>
      my posts
      <div>
        New post
      </div>
      <div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
    Main content
    </div>
</div>

  );
}


export default App;
