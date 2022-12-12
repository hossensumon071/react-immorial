import React from 'react';

const NotFound = ({needFullHeight}) => {
  return (
    <section className={`${needFullHeight && "min-h-scrren"} not-found wrapper`}>
      <h2 className="section-title">Not Found</h2>
    </section>
  );
};

export default NotFound;