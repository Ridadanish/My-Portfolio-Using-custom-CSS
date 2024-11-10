import React from 'react'
import '../app/styles/skills.css';
const Skills = () => {
  return (
    <div id='skills' className="skills-container">
        <div className="skills-grid">
            <div data-aos="zoom-in-up">
                <h2 className="skills-heading">Technologies I work with</h2>
                <p className="skills-heading">
                Technology skills are the abilities that allow people to interact with digital tools and media. They are also known as hard skills. 
 Technology skills are essential for many modern jobs and can help people work more efficiently and independently. They can also make people more appealing to employers and help them get or keep certain jobs. 
  
 Some of my technology skills are:
 Word processing 
 Emailing  
 Data management 
 User experience (UX) skills 
 Programming languages 
 Common operating systems 
 Software proficiency 
 Technical writing 
 Project management 
 Data analysis 
                </p>
            </div>
            <div>
                <div className="skills-right">
                <div className='skills-space '>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>

                <div className="skills-space">
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
