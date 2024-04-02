import React from 'react';

const Project2 = ({ name, description }) => {
  return (
    <div>
      <h1 data-ns-test="project-name">{name}</h1>
      <h6 data-ns-test="project-description">{description}</h6>
    </div>
  );
};

export default Project2