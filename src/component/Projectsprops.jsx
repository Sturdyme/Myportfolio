import React from 'react';
import ProjectCard from './ProjectCard'; // if you have a separate card component

const Projectsprops = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-16">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projectsprops;
