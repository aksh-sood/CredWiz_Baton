import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { NavbarWalletOption } from './NavbarWalletOption';
import './NavbarWallet.css';
import { IconContext } from 'react-icons';
import Logo from "../../assets/logo.png";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Button, Typography } from "@mui/material"
import Modal from '@mui/material/Modal';



function NavbarWallet() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const moneystatus = true;

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <FaIcons.FaBars className='menu-bars' onClick={showSidebar} />
                    <div className='logontitle'>
                        <img className='logo' src={Logo} height="40vh" width="40vh" />
                        <h2 className='title'>CREDWIZ</h2>
                    </div>
                    <PowerSettingsNewIcon onClick={handleOpen} sx={{ color: "white", height:"40px", width:"40px"}}/>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {NavbarWalletOption.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>

                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: 'auto',
                    width: 'auto',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
                        Quit?
                    </Typography>
                    <Button href="/" sx={{
                        width: '100%',
                        textAlign: 'center'
                    }}>Yes</Button>
                    <Button onClick={handleClose} sx={{
                        width: '100%',
                        textAlign: 'center'
                    }}>No</Button>
                </Box>
            </Modal>
        </>
    )
}

export default NavbarWallet