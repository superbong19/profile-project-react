import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">GNOBLE</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"><BsFacebook /> </a>
                <a href="https://instagram.com"><AiOutlineInstagram /></a>
                <a href="https://twitter.com"><AiOutlineTwitter /></a>
            </div>
            <div className="footer__copyright">
                <small>
                    &copy; GNOBLE. All right reserved
                </small>
            </div>
        </footer>
    )
}

export default Footer