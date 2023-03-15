import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'User Profile',
        path: '/user_profile',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'DashBoard',
        path: '/dash_board',
        icon: <MdIcons.MdOutlineDashboardCustomize />,
        cName: 'nav-text'
    },
    {
        title: 'Add Money',
        path: '/add_money',
        icon: <FaIcons.FaMoneyBillAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Transactions',
        path: '/transactions',
        icon: <AiIcons.AiOutlineTransaction />,
        cName: 'nav-text'
    },
    {
        title: 'Withdraw',
        path: '/withdraw',
        icon: <BiIcons.BiMoneyWithdraw />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about_us',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text'
    }
]