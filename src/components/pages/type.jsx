import React from 'react';
import Typed from 'typed.js';
import './type.css'

function Type() {
  // Create reference to store the DOM element containing the animation
  const intro = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(intro.current, {
      strings: [" Hello , I'm Santhosh👋"],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="intro">
      <span ref={intro} />
   </div>
    );
}
export default Type; 