import React from 'react'
import './About.css'
import aboutImage from '../../../../public/image/about-image.jpg'
export default function About() {
  return (
    <div id='about' className='about'>
    <div className="about-title">
        <h1><span>About</span>me</h1>
    </div>
    <div className="about-section">
        <div className="about-left">
            <img src={aboutImage} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, fugiat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tenetur rem architecto quia illo delectus placeat hic expedita fuga! Vitae!</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"100%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>Node Js</p><hr style={{width:"70%"}}/></div>
            </div>
        </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>+1</h1>
            <p>Years os experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>+2</h1>
            <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>0</h1>
            <p>Happy Clients</p>
        </div>
    </div>
    </div>
  )
}
