import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app/styles/projects.css';
const data = [
    {
        id: 0,
        title: "Simple Calculator",
        desc: "Its a simple calculator can do addition, multiplication, substraction etc",
        img: "/SC.PNG",
        tags: [" typescript", "javascript"],
    },
    {
        id: 1,
        title: "Number Guessing Game",
        desc: "Its a CLI number guessing game using typscript anf javascript foa a web dev gaming",
        img: "/NGG.PNG",
        tags: ["typescript", "javascript"],

    },
]

const projects = () => {
  return (
    <div id='projects' className="project-container">
      <Heading title='My Projects' />
      <div className="project-grid projects-grid-xl project-grid-md-2 project-grid-lg-3 projects-center"></div>
      {data.map((el) => (<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}

      
    </div>
  )
}

export default projects
