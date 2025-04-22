import React from 'react';
import './ExperienceCard.css';
import java from '../../../images/java.png';
import springboot from '../../../images/springboot.png';
import react from '../../../images/react.png';
import html from '../../../images/html.png';
import js from '../../../images/js.png';

function ExperienceCard({companyName, designation, statements, iconImages}) {

    const getIconImage = (iconName) => {
        switch (iconName) {
            case "java":
                return java;
            case "springboot":
                return springboot;
            case "react":
                return react;
            case "html":
                return html;
            case "js":
                return js;
            default:
                return null;
        }
    };
 
  return (
    <div className='ex_card_container'>
        <p className='ex_card_title'>{companyName}</p>
        <p className='ex_card_subtitle'>{designation}</p>

        {statements.map((value, index) => {
            return (
                <p className='ex_card_sentence' key={index}>
                {value}
            </p>
            )
        })}

        <p className='ex_card_tech_used_title'>Tech Stack Used</p>
        <div className='ex_card_icon_images_container'>
            {iconImages.map((iconName, index) => {
                return (
                    <img key={index} src={getIconImage(iconName )} alt={iconName} />
                )
            })}
        </div>
    </div>
  )
}

export default ExperienceCard