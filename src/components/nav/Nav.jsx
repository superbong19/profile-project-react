import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiSolidBook } from 'react-icons/bi'
import { LuHeartHandshake } from 'react-icons/lu'
import { MdOutlineContactSupport } from 'react-icons/md'
const Nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome /></a>
            <a href="#about"><AiOutlineUser /></a>
            <a href="#experience"><BiSolidBook /></a>
            <a href="#services"><LuHeartHandshake /></a>
            <a href="#contact"><MdOutlineContactSupport /></a>
        </nav>
    )
}

export default Nav