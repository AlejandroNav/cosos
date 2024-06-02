import React from 'react';
import MouseTracker from '../components/mousetracker';

const Page1 = () => {
  return (
    <div>
      <MouseTracker />
      <h1>Page 1</h1>
      <p>The MouseTracker component is a React component that tracks the mouse movement on the page and creates animated sushi images at the mouse's position when certain conditions are met. It uses React's useState to manage the positions of the sushi images and useRef to store the last mouse move time and the last mouse position. The component also includes a function to calculate the distance between two points, ensuring that a new sushi image is only created if the mouse has moved at least 100 pixels from its last position and at least 70 milliseconds have passed since the last image was created. This helps in managing the performance and ensuring a smoother user experience by limiting the number of images being rendered.</p>
    </div>
  );
};

export default Page1;
