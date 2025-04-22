import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';
import arrow from '../../images/arrow.png';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return (
    <button
      className={`scroll-to-top ${showButton ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <img width={20} src={arrow} alt="Scroll to top arrow" />
    </button>
  )
}

export default ScrollToTopButton;