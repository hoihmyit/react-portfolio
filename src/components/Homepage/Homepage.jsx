import React from 'react';
import './Homepage.css';
import githubIcon from '../../images/githubIcon.png';
import linkedinIcon from '../../images/linkedinIcon.png';

function Homepage() {
  return (
    <div className='homepage_container'>
      <div id='about' className='homepage_left'>
        <p className='homepage_left_h1'>
          <span className='red_color'>Hi, </span>my name is 
        </p>
        <p className='homepage_left_h2'>My Hoih</p>
        <p className='homepage_left_h3'>
          Developer at <span className='red_color'>KMS Technology</span>
        </p>
        <p className='homepage_left_description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam aperiam. Culpa accusamus repudiandae ab cum exercitationem eaque est, harum dolorum sint. Pariatur minus reprehenderit facere sit, porro corporis quibusdam!
        </p>
        <div>
          <a href="" target='_blank'>
            <img src={githubIcon} alt="githubIconImage" className='homepage_logo' />
          </a>
          <a href="" target='_blank'>
            <img src={linkedinIcon} alt="linkedinIconImage" className='homepage_logo' />
          </a>
        </div>
        <a href="mailto:hoihmyit@gmail.com">
          <button className='homepage_left_button'>Get in Touch</button>
        </a>
      </div>
      <div className='homepage_right'>
        <img src="https://camo.githubusercontent.com/5046cb083418fd1922b7f5990e594c3bb06f5d87e5516cd8839ae0aa48b3aec4/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966" alt="GIF" />
      </div>
    </div>
  )
}

export default Homepage;