import React from 'react'
import './Hero.css'
import profile from '../../../../public/image/profile.jpg'

export default function Hero() {
  return (
    <div className='hero'>
        <img src={profile} alt="" />
        <h1><span>I'm Mobin Bakhshi,</span> full stack developer based in Iran </h1>
        <p>I am a full stack developer junior from mashad, Iran with 1 year and i love backend code have a many project for backend.</p>
        <div className="hero-action">

        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>

        </div>
        
    </div>
  )
}
