import React from 'react'
import './Button.css'
import { Icon } from "@iconify/react";
import resumeFile from '../../assets/resume.pdf';
function Button() {
  const downloadResume = () => {
    const resumeUrl = resumeFile;

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.click();
  };
  return (

    <button className='btn' onClick={downloadResume}>
    
        Download Resume
        <Icon style={{paddingLeft:'10px'}} fontSize={30} icon="material-symbols:download" />
    </button>

  )
}

export default Button