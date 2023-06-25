import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiSolidBook } from 'react-icons/bi'
import { LuHeartHandshake } from 'react-icons/lu'
import { MdOutlineContactSupport } from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
    const [actived, setActived] = useState('#')
    function handleChange(hrefNav) {
        setActived(hrefNav)
    }
    return (
        <nav>
            {/* START--homeNav */}
            <a
                href="#"
                className={actived === '#' ? 'active' : ''}
                onClick={(e) => handleChange('#')}
            >
                <AiOutlineHome />
            </a>
            {/* ==================================================>END--homeNav */}

            {/* START--aboutNav */}
            <a
                href="#about"
                className={actived === '#about' ? 'active' : ''}
                onClick={(e) => handleChange('#about')}
            >
                <AiOutlineUser />
            </a>
            {/* ==================================================>END--aboutNav */}

            {/* START--experienceNav */}
            <a
                href="#experience"
                className={actived === '#experience' ? 'active' : ''}
                onClick={(e) => handleChange('#experience')}
            >
                <BiSolidBook />
            </a>
            {/* ==================================================>END--experienceNav */}

            {/* START--servicesNav */}
            <a
                href="#services"
                className={actived === '#services' ? 'active' : ''}
                onClick={(e) => handleChange('#services')}
            >
                <LuHeartHandshake />
            </a>
            {/* ==================================================>END--servicesNav */}

            {/* START--contactNav */}
            <a
                href="#contact"
                className={actived === '#contact' ? 'active' : ''}
                onClick={(e) => handleChange('#contact')}
            >
                <MdOutlineContactSupport />
            </a>
            {/* ==================================================>END--contactNav */}
        </nav>
    )
}

export default Nav