import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export const NavbarWalletOption = [
    {
        title: 'User Profile',
        path: '/userProfile',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text',

    },
    {
        title: 'Update User',
        path: '/updateUser',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text',
    },
    {
        title: 'About Us',
        path: '/about_us',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text'
    }
]