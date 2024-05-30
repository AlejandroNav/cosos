import React, { useRef, useEffect, useState } from 'react';
import './mousetracker.css';
import sushired from '../assets/sushired.png';
import sushibrown from '../assets/sushibrown.png';
import sushiorange from '../assets/sushiorange.png';

const images = [sushired, sushibrown, sushiorange]; // Array of images
const MAX_ELEMENTS = 50; // Maximum number of elements to keep in the queue

const MouseTracker = () => {
    const [positions, setPositions] = useState([]); // State to store the positions of the primary dots
    const lastMouseMoveTimeRef = useRef(Date.now()); // Ref to store the last mouse move time

    useEffect(() => {
        // Handler for mousemove event
        const handleMouseMove = (event) => {
            const now = Date.now();

            if (now - lastMouseMoveTimeRef.current < 100) {
                // If the time since the last mouse move is less than 100ms, do nothing
                return;
            }

            lastMouseMoveTimeRef.current = now; // Update the last mouse move time

            const newDot = {
                id: Date.now(), // Unique ID for each element
                x: event.clientX,
                y: event.clientY,
                img: images[Math.floor(Math.random() * images.length)], // Randomly select an image
            };

            setPositions((prevPositions) => {
                const updatedPositions = [...prevPositions, newDot];
                if (updatedPositions.length > MAX_ELEMENTS) {
                    updatedPositions.shift(); // Remove the oldest element if the queue is full
                }
                return updatedPositions;
            });
        };

        window.addEventListener('mousemove', handleMouseMove); // Add the mousemove event listener

        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
        <>
            {/* Render the primary images */}
            {positions.map((position, index) => (
                <img
                    key={position.id} // Unique key for each image
                    src={position.img} // Source of the image
                    alt="Sushi"
                    className="primary-image" // CSS class for styling
                    style={{
                        left: position.x, // Position the image horizontally
                        top: position.y, // Position the image vertically
                        position: 'absolute', // Ensure the image is absolutely positioned
                    }}
                />
            ))}
        </>
    );
};

export default MouseTracker;
