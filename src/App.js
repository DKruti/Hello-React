import React from 'react';
import './styles.css'; 

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the React Styling Assignment</h1>
        <p>Explore and enhance your styling skills!</p>
      </header>

      <section>
        <article>
          <h2>Article 1: Basics of React Styling</h2>
          <p>This is the content of the first article. In this piece, we will explore the 
            fundamental aspects of styling within the context of React. Gain insights into the process of 
            implementing styles for your components, enhancing the visual appeal of your React applications.
          </p>
        </article>

        <article>
          <h2>Article 2: Advanced React Styling</h2>
          <p>This is the content of the second article. Elevate your expertise in styling by delving into advanced techniques. 
            Explore methodologies such as CSS modules, styled-components, and other widely adopted styling solutions within the 
            React ecosystem. Learn how to make your websites look awesome with creative styles, cool themes, and fun animations, 
            taking your React skills to a whole new level!
          </p>
        </article>

        <article>
          <h2>Article 3: Responsive Design styling in React</h2>
          <p>This is the content of the third article. Make sure your React applications look good and work well on different devices.
          Learn how to make your React websites look good on any device with responsive design! We'll show you easy ways to adjust your 
          styles so that your content looks great on both big screens and small phones. Dive into the world of media queries and flexible l
          ayouts to create a seamless user experience. With responsive design in React, your websites will adapt and look fantastic no matter how users access them. 
          Join us in mastering the art of styling for all devices!
          </p>
        </article>
      </section>

      <aside className="sidebar">
        <section>
          <h2>Categories</h2>
          <ul>
            <li>Web Development</li>
            <li>Frontend Development</li>
            <li>UI/UX Design</li>
          </ul>
        </section>

        <section>
          <h2>Tags</h2>
          <ul>
            <li>React</li>
            <li>Styling</li>
            <li>React with CSS</li>
            <li>Styled components</li>
          </ul>
        </section>
      </aside>
      <footer>
        <p>&copy; 2023 React Styling Assignment</p>
      </footer>
    </div>
  );
};

export default App;
