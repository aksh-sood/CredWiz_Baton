import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "DashBoard",
    path: "/dashboard",
    icon: <MdIcons.MdOutlineDashboardCustomize />,
    cName: "nav-text",
  },
  {
    title: "Add Money",
    path: "/addmoney",
    icon: <FaIcons.FaMoneyBillAlt />,
    cName: "nav-text",
  },
  {
    title: "Send Money",
    path: "/sendMoney",
    icon: <FaIcons.FaMoneyBillAlt />,
    cName: "nav-text",
  },
  {
    title: "Transactions",
    path: "/transaction",
    icon: <AiIcons.AiOutlineTransaction />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about_us",
    icon: <AiIcons.AiFillInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "User Profile",
    path: "/userProfile",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Update User",
    path: "/updateUser",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
];
