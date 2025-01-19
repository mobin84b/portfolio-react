import React from 'react'
import './Service.css'
import {Services_data} from "../../assets/Services_data"
import { FaArrowRight } from "react-icons/fa";

export default function Service() {
  return (
    <div id='service' className='service'>
        <div className="services-title">
            <h1><span>My</span>services</h1>
        </div>
        <div className="service-container">
            {Services_data.map((service,index)=>{
              return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_dec}</p>
                <button >Read More <FaArrowRight /></button>
              </div>
            })}
        </div>
    </div>
  )
}
