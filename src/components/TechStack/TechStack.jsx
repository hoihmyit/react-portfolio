import React from 'react';
import './TechStack.css';
import java from '../../images/java.png';
import js from '../../images/js.png';
import springboot from '../../images/springboot.png';
import TechStackIconContainer from './TechStackIconContainer/TechStackIconContainer';

function TechStack() {

  const techStackData = [
    {
      iconName: "Java",
      iconImage: java,
      iconAltProperty: "javaImage"
    },
    {
      iconName: "Spring Boot",
      iconImage: springboot,
      iconAltProperty: "springbootImage"
    },
    {
      iconName: "JavaScript",
      iconImage: js,
      iconAltProperty: "jsImage"
    }
  ]

  return (
    <div id='tools' className='techstack_container'>
      <p className='techstack_title'>Tech Stack</p>
      <div className='techstack_icon_container'>
        {techStackData.map((item, index) => {
          return (
            <TechStackIconContainer
              key={index}
              name={item.iconName}
              image={item.iconImage}
              altProperty={item.iconAltProperty}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TechStack;