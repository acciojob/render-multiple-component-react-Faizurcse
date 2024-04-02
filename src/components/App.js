import React from "react";
import Project from "./Project";
import Project1 from "./Project1";
import Project2 from "./Project2";

const App = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Description of Project 1",
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
    },
    {
      name: "Project 3",
      description: "Description of Project 3",
    },
  ];

  return (
    <div id="main">
      <div className="ns-wrapper">
        {/* Wrap the Project components inside a fragment or a div */}
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project
              name={project.name}
              description={project.description}
            />
            <Project1
              name={project.name}
              description={project.description}
            />
            <Project2
              name={project.name}
              description={project.description}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;
