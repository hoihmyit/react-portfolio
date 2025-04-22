import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectBox from './ProjectBox/ProjectBox';

function Projects() {
    const [projectData, setProjectData] = useState([]);
  
    useEffect(() => {
      fetch("projects.json")
        .then((response) => response.json())
        .then((data) => {
          setProjectData(data.projectData);
        })
        .catch((error) => {
          console.log("Error when fetching project data: ", error);
        })
    }, []);

  return (
    <div>
      <p className='projects_title'>Projects</p>
      <div id='projects' className='projects_box_container'>
        {projectData.map((value, index) => {
          return (
            <ProjectBox
              key={index}
              image={value.image}
              title={value.title}
              industry={value.industry}
              sentences={value.sentences}
              link={value.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects;