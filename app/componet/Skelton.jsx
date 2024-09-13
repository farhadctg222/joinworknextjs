import React from 'react';

const Skelton = () => {
    return (
        <div className="skeleton">
  <div className="container">
    <div className="skeleton__header skeleton__loading">
      <div className="skeleton__headline skeleton__placeholder"></div>
      <div className="skeleton__text skeleton__placeholder"></div>
    </div>
  </div>
  <div className="container">
    <div className="skeleton__content skeleton__loading">
      <div className="skeleton__headline skeleton__placeholder"></div>
      <div className="skeleton__line"></div>
    </div>
  </div>
</div>
    );
};

export default Skelton;