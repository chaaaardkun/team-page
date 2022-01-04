import { useState, useEffect, useRef } from 'react';
import cx from './FadeAnimation.module.scss';
import clsx from 'clsx';

const FadeAnimation = ({ children, style }) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      style={style}
      className={clsx(cx['fade-in'], cx['fade-on-load'], { [cx['section-is-visible']]: isVisible })}
      ref={domRef}>
      {children}
    </div>
  );
};

export default FadeAnimation;
