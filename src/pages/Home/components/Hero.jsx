import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Robot from '../../../assets/Robot.png'; // Adjust path as necessary

export const Hero = () => {
  const emojiRef = useRef(null);
  const robotRef = useRef(null);
  const fontRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const duration = 5; // Duration in seconds
    const maxYOffset = 100; // Maximum vertical offset for robot bounce

    // Rocket animation function (left-right motion)
    const animateRocket = () => {
      gsap.fromTo(
        emojiRef.current,
        { x: '0%' }, // Start from the left side
        {
          x: `${screenWidth}px`, // Move to the right end of the screen
          duration: duration / 2,
          ease: 'linear',
          onComplete: () => {
            gsap.set(emojiRef.current, { x: `-${screenWidth}px` }); // Reset position to start
            setTimeout(animateRocket, 2000); // Delay before restarting animation
          },
        }
      );
    };

    // Robot bounce animation function (up-down motion)
    const animateRobot = () => {
      gsap.fromTo(
        robotRef.current,
        { y: 0 }, // Start from current position
        {
          y: maxYOffset, // Move down by maxYOffset pixels
          duration: 1, // Duration of bounce
          repeat: -1, // Repeat indefinitely
          yoyo: true, // Yoyo effect (back and forth)
          ease: 'power1.inOut', // Easing function
        }
      );
    };

    animateRocket(); // Start rocket animation
    animateRobot(); // Start robot bounce animation

  }, []);

  // Mouse-follow effect for button
  const handleMouseHover = (e) => {
    gsap.to(fontRef.current, {
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top,
      duration: 0.3,
    });
  };

  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="my-5" alt="text">
        <h1 className="text-5xl font-bold">Site Launch Studios</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          Site Launch Studios: Partnering with you to create web solutions that
          exceed your expectations.
        </p>
        <Link
          to="/products"
          type="button"
          className="relative text-white bg-sls-blue hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onMouseMove={handleMouseHover}
        >
          <span
            ref={emojiRef}
            style={{ display: 'inline-block', fontSize: '1.5rem', marginRight: '0.5rem' }}
          >
            🚀
          </span>
          <span ref={fontRef} className="absolute top-0 left-0">
            Launch Your Idea
          </span>
        </Link>
      </div>
      <div className="my-5 lg:max-w-xl" alt="visual">
        <img
          ref={robotRef}
          className="rounded-lg max-h-full"
          src={Robot}
          alt="Sitelaunch Robot"
        />
      </div>
    </section>
  );
};
