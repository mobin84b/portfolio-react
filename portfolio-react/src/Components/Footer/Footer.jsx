import React from 'react'
import './Footer.css'
import { FaRegUser } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h2>Mobin</h2>
                <p>i am junior fullstack developer from iran with 2years, recently my classes finished</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <FaRegUser/><input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
            © 2025 Mobin Bakhshi . All Rights Reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Term Of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
    </>
  )
}
